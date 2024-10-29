define('global_views_modal.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return " aria-labelledby=\"modal-title-label\" ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<h2 class=\"global-views-modal-content-header-title\" id=\"modal-title-label\">\n					"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":10,"column":5},"end":{"line":10,"column":19}}}) : helper)))
    + "\n				</h2>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"modal-dialog global-views-modal "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"modalDialogClass") || (depth0 != null ? compilerNameLookup(depth0,"modalDialogClass") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"modalDialogClass","hash":{},"data":data,"loc":{"start":{"line":1,"column":44},"end":{"line":1,"column":64}}}) : helper)))
    + "\" role=\"document\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPageHeader") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":82},"end":{"line":1,"column":148}}})) != null ? stack1 : "")
    + ">\n	<div class=\"global-views-modal-content\">\n		<!--Modal-Header -->\n		<div id=\"modal-header\" class=\"global-views-modal-content-header\">\n			<button type=\"button\" class=\"global-views-modal-content-header-close\" data-dismiss=\"modal\" aria-label="
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Close",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":5,"column":105},"end":{"line":5,"column":126}}}))
    + ">\n				<span aria-hidden=\"true\">&times;</span>\n			</button>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPageHeader") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":3},"end":{"line":12,"column":10}}})) != null ? stack1 : "")
    + "		</div>\n		<!--Modal-content -->\n		<div id=\"modal-body\" data-type=\"modal-body\" class=\" global-views-modal-content-body\" data-view=\"Child.View\">\n		</div>\n	</div>\n</div>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'global_views_modal'; return template;});