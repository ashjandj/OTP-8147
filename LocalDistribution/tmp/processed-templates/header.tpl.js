define('header.tpl', ['Handlebars','Handlebars.CompilerNameLookup','header_sidebar.tpl','header_sidebar.tpl'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	<div class=\"header-subheader\">\n        <div class=\"header-subheader-container\">\n            <div class=\"header-sidebar-toggle-wrapper\">\n                <button class=\"header-sidebar-toggle\" data-action=\"header-sidebar-show\">\n                    <i class=\"header-sidebar-toggle-icon\"></i>\n                </button>\n            </div>\n            <ul class=\"header-subheader-options\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showLanguagesOrCurrencies") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":16},"end":{"line":30,"column":23}}})) != null ? stack1 : "")
    + "                <li data-view=\"StoreLocatorHeaderLink\"></li>\n                <li data-view=\"RequestQuoteWizardHeaderLink\"></li>\n                <li data-view=\"QuickOrderHeaderLink\"></li>\n            </ul>\n            <div class=\"header-menu-profile\" data-view=\"Header.Profile\"></div>\n		</div>\n	</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "                <li class=\"header-subheader-settings\">\n                    <a href=\"#\" class=\"header-subheader-settings-link\" data-toggle=\"dropdown\" title=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Settings",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":16,"column":101},"end":{"line":16,"column":125}}}))
    + "\">\n                        <i class=\"header-menu-settings-icon\"></i>\n                        <i class=\"header-menu-settings-carret\"></i>\n                    </a>\n                    <div class=\"header-menu-settings-dropdown\">\n                        <h5 class=\"header-menu-settings-dropdown-title\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Site Settings",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":21,"column":72},"end":{"line":21,"column":101}}}))
    + "</h5>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLanguages") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":24},"end":{"line":24,"column":31}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCurrencies") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":24},"end":{"line":27,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\n                </li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                            <div data-view=\"Global.HostSelector\"></div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                            <div data-view=\"Global.CurrencySelector\"></div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showLanguagesOrCurrencies") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":53,"column":20},"end":{"line":69,"column":27}}})) != null ? stack1 : "")
    + "                    <div class=\"header-menu-profile\" data-view=\"Header.Profile\"></div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "                        <div class=\"header-menu-settings\">\n                            <a href=\"#\" class=\"header-subheader-settings-link\" data-toggle=\"dropdown\" title=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Settings",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":55,"column":109},"end":{"line":55,"column":133}}}))
    + "\">\n                                <i class=\"header-menu-settings-icon\"></i>\n                                <i class=\"header-menu-settings-carret\"></i>\n                            </a>\n                            <div class=\"header-menu-settings-dropdown\">\n                                <h5 class=\"header-menu-settings-dropdown-title\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Site Settings",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":60,"column":80},"end":{"line":60,"column":109}}}))
    + "</h5>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLanguages") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":61,"column":32},"end":{"line":63,"column":39}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCurrencies") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":64,"column":32},"end":{"line":66,"column":39}}})) != null ? stack1 : "")
    + "                            </div>\n                        </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "                                    <div data-view=\"Global.HostSelector\"></div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "                                    <div data-view=\"Global.CurrencySelector\"></div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"header-menu-locator-mobile\" data-view=\"StoreLocatorHeaderLink\"></div>\n                    <div class=\"header-menu-searchmobile\" data-view=\"SiteSearch.Button\"></div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"header-search-wrapper\">\n                        <div class=\"header-menu-search\" data-view=\"SiteSearch.Button\"></div>\n                        <div data-view=\"SiteSearch\"></div>\n                    </div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"header-menu-cart\">\n                        <div class=\"header-menu-cart-dropdown\" >\n                            <div data-view=\"Header.MiniCart\"></div>\n                        </div>\n                    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"header-message\" data-view=\"Message.Placeholder\"></div>\n\n<div class=\"header-main-wrapper\">\n    <a class=\"skip-to-main-content\" data-action=\"skip-to-main-content\" href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"hrefSkipToContext") || (depth0 != null ? compilerNameLookup(depth0,"hrefSkipToContext") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"hrefSkipToContext","hash":{},"data":data,"loc":{"start":{"line":4,"column":77},"end":{"line":4,"column":98}}}) : helper)))
    + "\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Skip to main content","Jumps to the main content section",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":100},"end":{"line":4,"column":172}}}))
    + "</a>\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isStandalone") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":38,"column":15}}})) != null ? stack1 : "")
    + "\n	<nav class=\"header-main-nav\" aria-label=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Main","Name of the header section that contains the company logo, the Login and Sign up links, and the cart.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":40,"column":42},"end":{"line":40,"column":166}}}))
    + "\">\n		<div id=\"banner-header-top\" class=\"content-banner banner-header-top\" data-cms-area=\"header_banner_top\" data-cms-area-filters=\"global\"></div>\n		<div class=\"header-sidebar-toggle-wrapper\">\n			<button class=\"header-sidebar-toggle\" data-action=\"header-sidebar-show\" aria-label=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Menu",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":43,"column":87},"end":{"line":43,"column":107}}}))
    + "\" aria-expanded=\"false\" aria-controls=\"header-sidebar-menu-controls\">\n				<i class=\"header-sidebar-toggle-icon\" aria-hidden=\"true\"></i>\n			</button>\n		</div>\n		<div class=\"header-content\">\n			<div class=\"header-logo-wrapper\">\n				<div data-view=\"Header.Logo\"></div>\n			</div>\n            <div class=\"header-right-menu\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isStandalone") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":52,"column":16},"end":{"line":74,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isStandalone") : depth0),{"name":"unless","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":75,"column":16},"end":{"line":80,"column":27}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isReorderEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":81,"column":16},"end":{"line":87,"column":23}}})) != null ? stack1 : "")
    + "            </div>\n		</div>\n		<div id=\"banner-header-bottom\" class=\"content-banner banner-header-bottom\" data-cms-area=\"header_banner_bottom\" data-cms-area-filters=\"global\"></div>\n	</nav>\n\n</div>\n\n<div class=\"header-sidebar-overlay\" data-action=\"header-sidebar-hide\"></div>\n\n<div class=\"header-secondary-wrapper\" data-view=\"Header.Menu\" data-phone-template=\"header_sidebar\" data-tablet-template=\"header_sidebar\"></div>\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'header'; return template;});