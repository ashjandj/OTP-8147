define('item_relations_related.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "	<aside class=\"item-relations-related\" title=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"You may also like","Name of the aside section containing related items",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":2,"column":46},"end":{"line":2,"column":132}}}))
    + "\">\n		<h3>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"You may also like",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":6},"end":{"line":3,"column":39}}}))
    + "</h3>\n		<div class=\"item-relations-related-row\">\n			<div data-type=\"backbone.collection.view.rows\"></div>\n		</div>\n	</aside>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showCells") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":8,"column":7}}})) != null ? stack1 : "")
    + "\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'item_relations_related'; return template;});