define('checkout_layout.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"layout\" class=\"checkout-layout\">\n	<header id=\"site-header\" class=\"checkout-layout-header\" data-view=\"Header\" aria-label=\""
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Header","Name of the entire header of the website",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":2,"column":88},"end":{"line":2,"column":153}}}))
    + "\"></header>\n	<div id=\"main-container\">\n		<div class=\"checkout-layout-breadcrumb\" data-view=\"Global.Breadcrumb\" data-type=\"breadcrumb\"></div>\n		<div class=\"checkout-layout-notifications\">\n			<div data-view=\"Notifications\"></div>\n		</div>\n		<!-- Main Content Area -->\n		<div id=\"content\" class=\"checkout-layout-content\" tabindex=\"-1\"></div>\n		<!-- / Main Content Area -->\n	</div>\n	<footer id=\"site-footer\" class=\"checkout-layout-footer\" data-view=\"Footer\"></footer>\n</div>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'checkout_layout'; return template;});