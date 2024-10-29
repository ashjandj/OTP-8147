define('facets_faceted_navigation_item_range.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<div class=\"facets-faceted-navigation-item-range-facet-group\" id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"htmlId") || (depth0 != null ? compilerNameLookup(depth0,"htmlId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"htmlId","hash":{},"data":data,"loc":{"start":{"line":2,"column":67},"end":{"line":2,"column":77}}}) : helper)))
    + "\" data-type=\"rendered-facet\" data-facet-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"facetId") || (depth0 != null ? compilerNameLookup(depth0,"facetId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facetId","hash":{},"data":data,"loc":{"start":{"line":2,"column":121},"end":{"line":2,"column":132}}}) : helper)))
    + "\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showHeading") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":26,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isUncollapsible") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":28,"column":1},"end":{"line":32,"column":8}}})) != null ? stack1 : "")
    + "		<span class=\"facets-faceted-navigation-item-range-end\" data-range-indicator=\"end\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeToLabel") || (depth0 != null ? compilerNameLookup(depth0,"rangeToLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeToLabel","hash":{},"data":data,"loc":{"start":{"line":33,"column":84},"end":{"line":33,"column":100}}}) : helper)))
    + "</span>\n		<span class=\"facets-faceted-navigation-item-range-start\" data-range-indicator=\"start\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeFromLabel") || (depth0 != null ? compilerNameLookup(depth0,"rangeFromLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeFromLabel","hash":{},"data":data,"loc":{"start":{"line":34,"column":88},"end":{"line":34,"column":106}}}) : helper)))
    + "</span>\n\n		<div\n			class=\"facets-faceted-navigation-item-range-slider\"\n			data-toggle=\"slider\"\n			data-facet-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"facetId") || (depth0 != null ? compilerNameLookup(depth0,"facetId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facetId","hash":{},"data":data,"loc":{"start":{"line":39,"column":18},"end":{"line":39,"column":29}}}) : helper)))
    + "\"\n			data-min=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeMin") || (depth0 != null ? compilerNameLookup(depth0,"rangeMin") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeMin","hash":{},"data":data,"loc":{"start":{"line":40,"column":13},"end":{"line":40,"column":25}}}) : helper)))
    + "\"\n			data-max=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeMax") || (depth0 != null ? compilerNameLookup(depth0,"rangeMax") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeMax","hash":{},"data":data,"loc":{"start":{"line":41,"column":13},"end":{"line":41,"column":25}}}) : helper)))
    + "\"\n			data-low=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeFrom") || (depth0 != null ? compilerNameLookup(depth0,"rangeFrom") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeFrom","hash":{},"data":data,"loc":{"start":{"line":42,"column":13},"end":{"line":42,"column":26}}}) : helper)))
    + "\"\n			data-high=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeTo") || (depth0 != null ? compilerNameLookup(depth0,"rangeTo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeTo","hash":{},"data":data,"loc":{"start":{"line":43,"column":14},"end":{"line":43,"column":25}}}) : helper)))
    + "\">\n						<div class=\"facets-faceted-navigation-item-range-slider-bar\" data-control=\"bar\" style=\"left: 0%; width: 100%;\"></div>\n						<button\n						    aria-label=\""
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"$(0) minimum value thumb",(depth0 != null ? compilerNameLookup(depth0,"facetDisplayName") : depth0),"Button that allows changing the minimum value of the slider",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":46,"column":22},"end":{"line":46,"column":141}}}))
    + "\"\n						    aria-description=\""
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Use the right and left arrow keys to increase or decrease the slider value",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":47,"column":28},"end":{"line":47,"column":118}}}))
    + "\"\n						    aria-orientation=\"horizontal\"\n						    aria-valuemin=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeMin") || (depth0 != null ? compilerNameLookup(depth0,"rangeMin") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeMin","hash":{},"data":data,"loc":{"start":{"line":49,"column":25},"end":{"line":49,"column":37}}}) : helper)))
    + "\"\n                            aria-valuemax=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeMax") || (depth0 != null ? compilerNameLookup(depth0,"rangeMax") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeMax","hash":{},"data":data,"loc":{"start":{"line":50,"column":43},"end":{"line":50,"column":55}}}) : helper)))
    + "\"\n                            aria-valuenow=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeFrom") || (depth0 != null ? compilerNameLookup(depth0,"rangeFrom") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeFrom","hash":{},"data":data,"loc":{"start":{"line":51,"column":43},"end":{"line":51,"column":56}}}) : helper)))
    + "\"\n						    class=\"facets-faceted-navigation-item-range-slider-bar-right\" data-control=\"low\" style=\"left: 0%;\"\n						    role=\"slider\"></button>\n						<button\n						    aria-label=\""
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"$(0) maximum value thumb",(depth0 != null ? compilerNameLookup(depth0,"facetDisplayName") : depth0),"Button that allows changing the maximum value of the slider",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":55,"column":22},"end":{"line":55,"column":141}}}))
    + "\"\n						    aria-description=\""
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Use the right and left arrow keys to increase or decrease the slider value",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":56,"column":28},"end":{"line":56,"column":118}}}))
    + "\"\n						    aria-orientation=\"horizontal\"\n						    aria-valuemin=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeMin") || (depth0 != null ? compilerNameLookup(depth0,"rangeMin") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeMin","hash":{},"data":data,"loc":{"start":{"line":58,"column":25},"end":{"line":58,"column":37}}}) : helper)))
    + "\"\n                            aria-valuemax=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeMax") || (depth0 != null ? compilerNameLookup(depth0,"rangeMax") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeMax","hash":{},"data":data,"loc":{"start":{"line":59,"column":43},"end":{"line":59,"column":55}}}) : helper)))
    + "\"\n                            aria-valuenow=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeTo") || (depth0 != null ? compilerNameLookup(depth0,"rangeTo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeTo","hash":{},"data":data,"loc":{"start":{"line":60,"column":43},"end":{"line":60,"column":54}}}) : helper)))
    + "\"\n						    class=\"facets-faceted-navigation-item-range-slider-bar-left\" data-control=\"high\" style=\"left: 100%;\"\n						    role=\"slider\"></button>\n					</div>\n\n	</div>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isUncollapsible") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":25,"column":10}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "				<div class=\"facets-faceted-navigation-item-range-facet-group-expander\">\n					<h4 class=\"facets-faceted-navigation-item-range-facet-group-title\">\n						"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"facetDisplayName") || (depth0 != null ? compilerNameLookup(depth0,"facetDisplayName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"facetDisplayName","hash":{},"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":7,"column":26}}}) : helper)))
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRemoveLink") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":12,"column":13}}})) != null ? stack1 : "")
    + "					</h4>\n				</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "						<a aria-label=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Clear $(0) filter",(depth0 != null ? compilerNameLookup(depth0,"facetDisplayName") : depth0),"Link that clears the selected filter",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":9,"column":21},"end":{"line":9,"column":110}}}))
    + "\" class=\"facets-faceted-navigation-item-range-filter-delete\" href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"removeLink") || (depth0 != null ? compilerNameLookup(depth0,"removeLink") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"removeLink","hash":{},"data":data,"loc":{"start":{"line":9,"column":177},"end":{"line":9,"column":191}}}) : helper)))
    + "\">\n							<i class=\"facets-faceted-navigation-item-range-filter-delete-icon\"></i>\n						</a>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<a href=\"#\" class=\"facets-faceted-navigation-item-range-facet-group-expander\" data-toggle=\"collapse\" data-target=\"#"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"htmlId") || (depth0 != null ? compilerNameLookup(depth0,"htmlId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"htmlId","hash":{},"data":data,"loc":{"start":{"line":16,"column":119},"end":{"line":16,"column":129}}}) : helper)))
    + " .facets-faceted-navigation-item-range-facet-group-wrapper\" data-type=\"collapse\" title=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"facetDisplayName") || (depth0 != null ? compilerNameLookup(depth0,"facetDisplayName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facetDisplayName","hash":{},"data":data,"loc":{"start":{"line":16,"column":217},"end":{"line":16,"column":237}}}) : helper)))
    + "\">\n					<i class=\"facets-faceted-navigation-item-range-facet-group-expander-icon\"></i>\n					<h4 class=\"facets-faceted-navigation-item-range-facet-group-title\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"facetDisplayName") || (depth0 != null ? compilerNameLookup(depth0,"facetDisplayName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facetDisplayName","hash":{},"data":data,"loc":{"start":{"line":18,"column":72},"end":{"line":18,"column":92}}}) : helper)))
    + "</h4>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRemoveLink") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":5},"end":{"line":23,"column":12}}})) != null ? stack1 : "")
    + "				</a>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "	<div class=\"facets-faceted-navigation-item-range-facet-group-wrapper\">\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	<div class=\"facets-faceted-navigation-item-range-facet-group-wrapper "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isCollapsed") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":31,"column":70},"end":{"line":31,"column":116}}})) != null ? stack1 : "")
    + "\">\n";
},"11":function(container,depth0,helpers,partials,data) {
    return " collapse";
},"13":function(container,depth0,helpers,partials,data) {
    return " in";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showFacet") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":67,"column":7}}})) != null ? stack1 : "")
    + "\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'facets_faceted_navigation_item_range'; return template;});