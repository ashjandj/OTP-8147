define('subscriptions_addon_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"subscriptions-addon-details-right-col\">\n            <div data-view=\"Pricing.View\"></div>\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing;

  return "        <div class=\"subscriptions-addon-details-description\">\n            <h3>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Description",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":25,"column":16},"end":{"line":25,"column":43}}}))
    + "</h3>\n            <p>"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"description") || (depth0 != null ? compilerNameLookup(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":26,"column":15},"end":{"line":26,"column":32}}}) : helper))) != null ? stack1 : "")
    + "</p>\n        </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <div class=\"subscriptions-addon-details-row-fluid\">\n                <button class=\"subscriptions-addon-details-button-continue\" data-action=\"placeOrder\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isAddingLine") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":37,"column":20},"end":{"line":41,"column":27}}})) != null ? stack1 : "")
    + "                </button>\n            </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "                        "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Purchase Add-On",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":38,"column":24},"end":{"line":38,"column":55}}}))
    + "\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "                        "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Update Add-On",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":40,"column":24},"end":{"line":40,"column":53}}}))
    + "\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "        <button class=\"subscriptions-addon-details-button-cancel\" data-action=\"cancel\">Cancel Add-On</button>\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "            <p class=\"subscriptions-addon-details-summary-message-info\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Costs will be prorated to the current subscription billing period",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":49,"column":72},"end":{"line":49,"column":153}}}))
    + "</p>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"subscriptions-addon-details-main-content\">\n    <div class=\"subscriptions-addon-details-content-header-wrapper\">\n        <h2 class=\"subscriptions-addon-details-content-header-title\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"displayName") || (depth0 != null ? compilerNameLookup(depth0,"displayName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data,"loc":{"start":{"line":3,"column":69},"end":{"line":3,"column":84}}}) : helper)))
    + "</h2>\n        <span data-view=\"Status.View\"></span>\n    </div>\n    <div class=\"subscriptions-addon-details-col\">\n        <div class=\"subscriptions-addon-details-row\">\n        <div class=\"subscriptions-addon-details-left-col\">\n            <div class=\"subscriptions-addon-details-image-gallery-container\">\n                <div id=\"banner-image-top\" class=\"subscriptions-addon-details-content-banner\"></div>\n                <div class=\"subscriptions-addon-details-image-gallery\">\n                    <img class=\"subscriptions-addon-details-center-block\" src=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"imageUrl") || (depth0 != null ? compilerNameLookup(depth0,"imageUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageUrl","hash":{},"data":data,"loc":{"start":{"line":12,"column":79},"end":{"line":12,"column":91}}}) : helper)))
    + "\" alt=\"\" itemprop=\"image\" data-loader=\"false\" data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalId") || (depth0 != null ? compilerNameLookup(depth0,"internalId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalId","hash":{},"data":data,"loc":{"start":{"line":12,"column":146},"end":{"line":12,"column":160}}}) : helper)))
    + "\">\n                </div>\n            </div>\n        </div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasPriceIntervals") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":20,"column":15}}})) != null ? stack1 : "")
    + "        </div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasDescription") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":8},"end":{"line":28,"column":15}}})) != null ? stack1 : "")
    + "\n    </div>\n    <div class=\"subscriptions-addon-details-summary\">\n        <div data-view=\"Quantity.Amount\"></div>\n        <div class=\"subscriptions-addon-details-summary-container\" data-view=\"Summary.View\"></div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showContinueButton") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":8},"end":{"line":44,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCancelButton") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":8},"end":{"line":47,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInfoMessage") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":8},"end":{"line":50,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n</div>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'subscriptions_addon_details'; return template;});