/* jshint esversion: 6 */

var env = require('yeoman-environment')
,   inquirer = require('inquirer')
,	configs = require('../configurations').getConfigs()
,	{log, color, colorText} = require('ns-logs')
,	path = require('path')
,   { rmSync } = require('fs')
,	yeoman = require('yeoman-environment')
,	_ =  require('underscore')
;

var env = yeoman.createEnv();
env.register(require.resolve('../../generator-extension/generators/service/index.js'), 'extension:service');

'use strict';

function _getEntryPoints(manifest)
{
	if(manifest.sass && manifest.sass.entry_points)
	{
		return _.keys(manifest.sass.entry_points);
	}
	else if(manifest.javascript && manifest.javascript.entry_points)
	{
		return _.keys(manifest.javascript.entry_points);
	}
	else if(manifest.templates && manifest.templates.application)
	{
		return _.keys(manifest.templates.application);
	}
	else
	{
		return ['shopping', 'myaccount', 'checkout'];
	}
}

function _addJavaScript(manifest, file_path)
{
	if(manifest.javascript && manifest.javascript.entry_points)
	{
		_.each(manifest.javascript.entry_points, function(files, application)
		{
			var js_files = manifest.javascript.application[application].files;

			if(_.indexOf(js_files, file_path) < 0)
			{
				js_files.push(file_path);
			}
		});
	}
	else
	{
		var entry_points = _getEntryPoints(manifest);

		manifest.javascript = {
			entry_points: {}
        ,	application: {}
		};

		_.each(entry_points, function(application)
		{
			manifest.javascript.entry_points[application] = file_path;

			manifest.javascript.application[application] = {
				files: [file_path]
			};
		});
	}

	return Promise.resolve(manifest);
}

function _addSuiteScript(manifest, file_path, is_service)
{
	if(manifest['ssp-libraries'] && manifest['ssp-libraries'].entry_point)
	{
		if(_.indexOf(manifest['ssp-libraries'].files, file_path) < 0)
		{
			manifest['ssp-libraries'].files.push(file_path);
		}
	}
	else
	{
		manifest['ssp-libraries'] = {
			entry_point: file_path
        ,	files: [file_path]
		};
	}

	if(is_service)
	{
		return generateService({
				vendor: manifest.vendor.replace(/[^\w\-\_@0-9]/gi, '')
			,	name: manifest.name.replace(/[^\w\-\_@0-9]/gi, '')
			,	service_name: path.basename(file_path).replace('.ServiceController.js', '')
			,	manifest: manifest
			});
	}
	else
	{
		return Promise.resolve(manifest);
	}
}

function _removeJavaScript(manifest, file_path)
{
	if(manifest.javascript && manifest.javascript.application)
	{
		_.each(manifest.javascript.entry_points, function(files, application)
		{
			var index = _.indexOf(manifest.javascript.application[application].files, file_path);
			if(index >= 0)
			{
				manifest.javascript.application[application].files.splice(index, 1);

				if(manifest.javascript.entry_points[application] === file_path)
				{
					manifest.javascript.entry_points[application] = '';
				}
			}

			if(manifest.javascript.application[application].files.length === 0)
			{
				delete manifest.javascript.application[application];
			}
		});

		if(_.keys(manifest.javascript.application).length === 0)
		{
			delete manifest.javascript;
		}
	}

	return Promise.resolve(manifest);
}

function _removeSuiteScript(manifest, file_path, is_service)
{
	if(manifest['ssp-libraries'] && manifest['ssp-libraries'].files)
	{
		var index = _.indexOf(manifest['ssp-libraries'].files, file_path);

		if(index >= 0)
		{
			manifest['ssp-libraries'].files.splice(index, 1);

			if(file_path === manifest['ssp-libraries'].entry_point)
			{
				manifest['ssp-libraries'].entry_point = '';
			}

			if(manifest['ssp-libraries'].files.length === 0)
			{
				delete manifest['ssp-libraries'];
			}

			if(is_service)
			{
				//delete automatically generated service if the service controller is deleted
				var service_name = path.basename(file_path).replace('.ServiceController.js', '')
				,	service_path = path.join(manifest.local_folder, 'assets', 'services', service_name + '.Service.ss');
                rmSync(service_path, { recursive: true, force: true });

				updateAssets({
						manifest: manifest
					,	file_path: 'services/' + service_name + '.Service.ss'
					,	action:'deleted'}
				);
			}
		}
	}

	return Promise.resolve();
}

function generateService(extension_options)
{
	return new Promise((resolve)=>{

		var options = {
			gulp_context: 'gulp/generator-extension'
		,	work_folder: configs.folders.source.source_path
		,	extension_options: extension_options
		,	force: true
		,	cb: finished_cb
		};

		env.run('extension:service', options);

		var service = 'services/' + extension_options.service_name + '.Service.ss';

		updateAssets({
			manifest: extension_options.manifest
		,	file_path: service
		,	action:'added'}
		);

		function finished_cb()
		{
			resolve();
		}
	});

}

function askJSType(options)
{
	return inquirer.prompt([
	        {
	            type: 'list'
	        ,   name: 'js_type'
	        ,   message: 'Is the file ' + options.file_name + ' a JavaScript file or a SuiteScript file?'
	        ,   default: 'None'
	        ,   choices: ['None', 'JavaScript', 'SuiteScript']
	        }
	    ])
		.then(function selectedJS(answer)
	        {
	            switch(answer.js_type)
	            {
	            	case 'JavaScript':
	            		options.is_javascript = true;
	            		break;
	            	case 'SuiteScript':
	            		options.is_suitescript = true;
	            		break;
					case 'None':
						break;
	            }
	        }
	    );
}

function changeJavascript(data, options)
{
	var promise;

	switch(data.action)
	{
		case 'added':
		case 'renamed':
			if(options.is_javascript)
			{
				promise = _addJavaScript(data.manifest, data.file_path, data.cb);
			}
			else if(options.is_suitescript)
			{
				promise = _addSuiteScript(data.manifest, data.file_path, options.is_service);
			}
            else if(options.is_suitescript2)
            {
                promise = Promise.resolve(data.manifest);

            }
			break;

		case 'deleted':

			if(options.is_javascript)
			{
				promise = _removeJavaScript(data.manifest, data.file_path);
			}
			else if(options.is_suitescript)
			{
				promise = _removeSuiteScript(data.manifest, data.file_path, options.is_service);
			}
            else
            {
                promise = Promise.resolve(data.manifest);
            }
			break;
	}

	return promise;
}

function updateJavascript(data)
{
	var js_options = {
		is_javascript: data.file_path.toLowerCase().includes('javascript')
    ,	is_suitescript: data.file_path.toLowerCase().includes(path.sep + 'suitescript' + path.sep)
    ,	is_suitescript2: data.file_path.toLowerCase().includes(path.sep + 'suitescript2' + path.sep) //TODO needs documentation
	,	is_service: data.file_path.includes('.ServiceController')
	,	is_backend_script: data.file_path.includes('BackendScripts')
	,	file_name: path.basename(data.file_path)
	};

    if(!js_options.is_backend_script && !js_options.is_suitescript2 && !(js_options.is_javascript || js_options.is_suitescript))
	{
		return askJSType(js_options)
			.then(function()
			{
				changeJavascript(data, js_options);
			});
	}
	else
	{
		return changeJavascript(data, js_options);
	}
}

const isFallback = (manifest) => manifest.sub_type === 'fallback';
function updateSass(data) {
	const {manifest, file_path} = data;
	const isFallbackType = isFallback(manifest);

	const sassArray = isFallbackType ? manifest.sass : manifest.sass && manifest.sass.files;

	switch(data.action) {
		case 'renamed':
		case 'added':
			if(sassArray)
			{
				if(!sassArray.includes(file_path))
				{
					sassArray.push(file_path);
				}
			}
			else
			{
				if(isFallbackType) {
					manifest.sass = [file_path];
					break;
				}

				manifest.sass = {
					entry_points: {},
					files: [
		           		file_path
		        	]
				};

				const entry_points = _getEntryPoints(manifest);
				_.each(entry_points, function(application)
				{
					manifest.sass.entry_points[application] = file_path;
				});
			}
			break;
		case 'deleted':
			if(sassArray)
			{
				const index = _.indexOf(sassArray, file_path);

				if(index >= 0)
				{
					sassArray.splice(index, 1);

					if(!isFallbackType) {
						_.each(manifest.sass.entry_points, function (files_data, application) {
							if (manifest.sass.entry_points[application] === file_path) {
								manifest.sass.entry_points[application] = '';
							}
						});
					}
				}

				if(sassArray.length === 0)
				{
					delete manifest.sass;
				}
			}

			break;
	}

	return Promise.resolve(data.manifest);
}

function updateTemplates(data) {
	const { manifest, file_path } = data;
	const isFallbackType = isFallback(manifest);

	const templatesArray = isFallbackType ? manifest.templates : manifest.templates && manifest.templates.application;

	switch(data.action) {
		case 'added':
		case 'renamed':
			if(templatesArray?.length || Object.entries(templatesArray).length)
			{
				_.each(templatesArray, function(files, application)
				{
					const template_files = isFallbackType ? templatesArray : templatesArray[application].files;

					if(!template_files.includes(file_path))
					{
						template_files.push(file_path);
					}
				});
			}
			else
			{
				if(isFallbackType) {
					manifest.templates = [file_path];
					break;
				}

				manifest.templates = {
					application: {}
				};

				const entry_points = _getEntryPoints(manifest);
				_.each(entry_points, function(application)
				{
					manifest.templates.application[application] = {
						files: [file_path]
					};
				});
			}
			break;
		case 'deleted':
			if(manifest.templates) {
				_.each(templatesArray, function (files, application) {
					const templatesFiles = isFallbackType ? templatesArray : templatesArray[application].files;
					const index = _.indexOf(templatesFiles, file_path);

					if (index >= 0) {
						templatesFiles.splice(index, 1);
					}

					if (!isFallbackType && templatesFiles.length === 0) {
						delete templatesArray[application];
					}
				});

				if (_.keys(templatesArray).length === 0) {
					delete manifest.templates;
				}
			}
			break;
	}

	return Promise.resolve(manifest);
}

function updateConfiguration(data)
{
	switch(data.action)
	{
		case 'added':
		case 'renamed':

			if(data.manifest.configuration)
			{
				if(_.indexOf(data.manifest.configuration.files, data.file_path) < 0)
				{
					data.manifest.configuration.files.push(data.file_path);
				}
			}
			else
			{
				data.manifest.configuration = {
					files: [data.file_path]
				};
			}

			break;

		case 'deleted':

			if(data.manifest.configuration && data.manifest.configuration.files)
			{
				var index = _.indexOf(data.manifest.configuration.files, data.file_path);

				if(index >= 0)
				{
					data.manifest.configuration.files.splice(index, 1);
				}

				if(data.manifest.configuration.files.length === 0)
				{
					delete data.manifest.configuration;
				}
			}
			break;
	}

	return Promise.resolve(data.manifest);
}

function updateAssets(data)
{
	var asset_folder = path.dirname(data.file_path)
	,	root_folder = asset_folder.split('/');

	//is the case where there are anidated directories inside of an asset
	if(root_folder.length > 1)
	{
		asset_folder = root_folder[0];
	}

	switch(data.action)
	{
		case 'renamed':
		case 'added':
			data.manifest.assets = data.manifest.assets || {};

			data.manifest.assets[asset_folder] = data.manifest.assets[asset_folder] || { files: [] };

			if(_.indexOf(data.manifest.assets[asset_folder].files, data.file_path) < 0)
			{
				data.manifest.assets[asset_folder].files.push(data.file_path);
			}

			break;

		case 'deleted':
			if(data.manifest.assets && data.manifest.assets[asset_folder])
			{
				var index = _.indexOf(data.manifest.assets[asset_folder].files, data.file_path);

				if(index >= 0)
				{
					data.manifest.assets[asset_folder].files.splice(index, 1);
				}

				if(data.manifest.assets[asset_folder].files.length === 0)
				{
					delete data.manifest.assets[asset_folder];
				}

				if(_.keys(data.manifest.assets).length === 0)
				{
					delete data.manifest.assets;
				}
			}
	}

	return Promise.resolve(data.manifest);
}

function updateSkins(data)
{
	switch(data.action)
	{
		case 'added':
		case 'renamed':

			if(data.manifest.skins)
			{
				var skins = _.pluck(data.manifest.skins, 'file');

				if(_.indexOf(skins, data.file_path) < 0)
				{
					data.manifest.skins.push({
						name: path.basename(data.file_path, '.json')
					,	file: data.file_path
					});

					log(colorText(color.YELLOW, `Adding skin ${data.file_path} to the manifest file. You should edit the manifest after it and add a proper name for this skin.`));
				}
			}
			else
			{
				data.manifest.skins = [
					{
						name: path.basename(data.file_path, '.json')
					,	file: data.file_path
					}
				];
			}

			break;

		case 'deleted':

			if(data.manifest.skins)
			{
				var skins = _.pluck(data.manifest.skins, 'file');
				var index = _.findIndex(data.manifest.skins, function(skin)
					{
						return skin.file === data.file_path;
					});

				if(index >= 0)
				{
					data.manifest.skins.splice(index, 1);
				}

				if(data.manifest.skins.length === 0)
				{
					delete data.manifest.skins;
				}
			}
			break;
	}

	return Promise.resolve(data.manifest);
}

function updateTranslations(data) {
	switch(data.action) {
		case 'added':
		case 'renamed':
			const fileName = path.basename(data.file_path);
			const lang = fileName.replace(/^([a-z]{2}_[A-Z]{2})\.json$/, '$1');

			data.manifest.translations = data.manifest.translations || {};
			const entrypoints = _getEntryPoints(data.manifest);
            if(_.isEmpty(data.manifest.translations.applications)){
                data.manifest.translations.applications =  _.object(entrypoints, Array(entrypoints.length).fill({}));
            }

			const applications = data.manifest.translations.applications;
			_.each(applications, (appTranslations, app) => {
				if (_.values(appTranslations).indexOf(data.file_path) < 0) {
					appTranslations[lang] = data.file_path;
					log(colorText(color.YELLOW, `Adding translations ${lang}(${data.file_path}) to ${app} into the manifest file.`));
				}
			});

			break;
		case 'deleted':
			if(!data.manifest.translations || !data.manifest.translations.applications) {
				break;
			}

			_.each(data.manifest.translations.applications, (translations, app) => {
				const languages = _.keys(translations);
				const translationsValues = _.values(translations);
				const index = translationsValues.indexOf(data.file_path);

                if(index >= 0) {
                    const lang = languages[index];
                    delete translations[lang];
                    log(colorText(color.YELLOW, `Deleting translations ${lang}: ${data.file_path} from the manifest file.`));
                }

				if(translationsValues.length === 0) {
					delete data.manifest.translations.applications[app];
				}
			});

			if(_.isEmpty(data.manifest.translations)) {
				delete data.manifest.translations;
			}

			break;
	}

	return Promise.resolve(data.manifest);
}


module.exports = {
	generateService: generateService
,	updateAssets: updateAssets
,	updateSkins: updateSkins
,	updateTranslations: updateTranslations
,	updateConfiguration: updateConfiguration
,	updateJavascript: updateJavascript
,	updateSass: updateSass
,	updateTemplates: updateTemplates
};
