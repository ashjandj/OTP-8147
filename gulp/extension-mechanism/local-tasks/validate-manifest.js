/*jshint esversion: 8 */

const fs = require('fs');
const {log} = require('ns-logs');
const PluginError = require('../CustomError');
const configs = require('../configurations').getConfigs();
const path = require('path');
const _ = require('underscore');

function validateManifests(cb)
{
	var manifests = [];
	if(configs.extensionMode && configs.folders.extensions_path && configs.folders.extensions_path.length)
	{
		_.each(configs.folders.extensions_path, function(manifest_path)
		{
			try
			{
				var ext_manifest_path = path.join(manifest_path, 'manifest.json')
				,	manifest = JSON.parse(fs.readFileSync(ext_manifest_path).toString());

				var validate_helper = require('./validate-config');
				validate_helper.validateConfigs(manifest, manifest_path, cb);

				manifest.local_folder = manifest_path;
				manifests.push(manifest);
			}
			catch(error)
			{
				//ignore those folder with no manifest
			}
		});
	}

	if(configs.folders.theme_path && fs.existsSync(configs.folders.theme_path))
	{
		var theme_manifest_path = path.join(configs.folders.theme_path, 'manifest.json')
		,	manifest = JSON.parse(fs.readFileSync(theme_manifest_path).toString());

		manifest.local_folder = configs.folders.theme_path;

		manifests.push(manifest);
	}

	_validateFilePaths(manifests, cb);
}

const isFallback = (manifest) => manifest.sub_type === 'fallback';
const validateArray = (name, array) => {
	if(!Array.isArray(array)){
		throw new PluginError('gulp validate', `${name} section of the manifest has to be an array.`);
	}
};

function _validateTemplatesFilePaths(manifest, files, cb) {
	if(isFallback(manifest) && manifest.templates) {
		try {
			validateArray('Templates', manifest.templates);
			files = files.concat(manifest.templates);
		}catch(error) {
			cb(error);
		}
		return;
	}

	if(manifest.templates && !manifest.templates.application) {
		cb(new PluginError('gulp validate', 'Templates section of the manifest needs an application key.'));
		return;
	}

	_.each(manifest.templates && manifest.templates.application, function(application)
	{
		files = files.concat(application.files);
	});
}

function _validateSassFilePaths(manifest, files, cb){
	if(!manifest.sass)
	{
		return;
	}

	if(isFallback(manifest)) {
		try {
			validateArray('Sass', manifest.sass);
			files = files.concat(manifest.sass);
		}catch(error) {
			cb(error);
		}
		return;
	}

	if(!manifest.sass.files)
	{
		cb(new PluginError('gulp validate', 'Sass section of the manifest needs an array of files.'));
		return;
	}

	if(!manifest.sass.entry_points || !_.keys(manifest.sass.entry_points).length)
	{
		cb(new PluginError('gulp validate', 'Sass section of the manifest needs an entry point declaration section.'));
		return;
	}

	for(var sass_index in manifest.sass.entry_points)
	{
		var sass_entry_point = manifest.sass.entry_points[sass_index];

		if(!_.contains(manifest.sass.files, sass_entry_point))
		{
			cb(new PluginError('gulp validate', 'Sass files section does not include the entry point ' + sass_entry_point));
			return;
		}
	}

	files = files.concat(manifest.sass.files);
}

function _validateFilePaths(manifests, cb)
{
	for(var i = 0; i < manifests.length; i++)
	{
		const manifest = manifests[i];
		const manifest_path = path.join(manifest.local_folder, 'manifest.json');

		log('Checking ' + manifest_path + ' file paths...');

		let files = [];

		_validateTemplatesFilePaths(manifest, files, cb);
		_validateSassFilePaths(manifest, files, cb);

		if(manifest.assets)
		{
			_.each(manifest.assets, function(asset_files)
			{
				asset_files.files = _.map(asset_files.files, function(file_path)
				{
					return 'assets/' + file_path;
				});

				files = files.concat(asset_files.files);
			});
		}

		if(manifest.type !== 'theme')
		{
			if(manifest.javascript)
			{
				if(!manifest.javascript.entry_points || !_.keys(manifest.javascript.entry_points).length)
				{
					cb(new PluginError('gulp validate', 'JavaScript section of the manifest needs an entry point declaration section.'));
					return;
				}

				if(!manifest.javascript.application)
				{
					cb(new PluginError('gulp validate', 'JavaScript section of the manifest needs a application declaration section.'));
					return;
				}

				for(var js_app in manifest.javascript.entry_points)
				{
					var js_entry_point = manifest.javascript.entry_points[js_app];

					if(!manifest.javascript.application[js_app] || !manifest.javascript.application[js_app].files)
					{
						cb(new PluginError('gulp validate', 'JavaScript section of the manifest needs a files declaration section for the application ' + js_app));
						return;
					}

					if(!_.contains(manifest.javascript.application[js_app].files, js_entry_point))
					{
						cb(new PluginError('gulp validate', 'JavaScript ' + js_app + ' files section does not include the entry point ' + js_entry_point));
						return;
					}
				}

				_.each(manifest.javascript.application, function(application)
				{
					files = files.concat(application.files);
				});
			}

			if(manifest['ssp-libraries'])
			{
				if(!manifest['ssp-libraries'].entry_point)
				{
					cb(new PluginError('gulp validate', 'Ssp-libraries section of the manifest needs an entry point declaration.'));
					return;
				}

				if(!manifest['ssp-libraries'].files)
				{
					cb(new PluginError('gulp validate', 'Ssp-libraries section of the manifest needs a files declaration section.'));
					return;
				}

				if(!_.contains(manifest['ssp-libraries'].files, manifest['ssp-libraries'].entry_point))
				{
					cb(new PluginError('gulp validate', 'Ssp-libraries files section does not include the entry point ' + manifest['ssp-libraries'].entry_point));
					return;
				}

				files = files.concat(manifest['ssp-libraries'].files);
			}

			if(manifest.configuration)
			{
				if(!manifest.configuration.files)
				{
					cb(new PluginError('gulp validate', 'Configuration section of the manifest needs an array of files.'));
					return;
				}

				files = files.concat(manifest.configuration.files);
			}

		}

		files = _.map(files, function(file_path)
		{
			return path.join(manifest.local_folder, file_path);
		});

		var errors = [];

		_.each(files, function(file_path)
		{
			if(!fs.existsSync(file_path))
			{
				errors.push(file_path + ' does not exists.');
			}
		});

		if(errors.length)
		{
			cb(new PluginError('gulp validate', '\nThe following errors were found in the ' + manifest_path + ' file:\n' + errors.join('\n')));
			return;
		}

		log('Check ' + manifest_path + ' file paths ok');
	}

	cb();
}

module.exports = {
	validateManifests: validateManifests
}
