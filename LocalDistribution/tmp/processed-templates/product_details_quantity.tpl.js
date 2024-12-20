define('product_details_quantity.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression;

  return "		<div class=\"product-details-quantity-options\" data-validation=\"control-group\">\n			<label for=\"quantity\" class=\"product-details-quantity-options-title\">\n				"
    + alias2((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Qty","Abbreviation of \"Quantity\". Shows the quantity of an item",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":5,"column":83}}}))
    + ":\n			</label>\n\n			<div data-validation=\"control\">\n				<div class=\"product-details-quantity-container\">\n					<button type=\"button\" class=\"product-details-quantity-remove\" data-action=\"updateQuantity\" data-type=\"product-details-quantity-remove\" data-value=\"-1\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMinusButtonDisabled") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":156},"end":{"line":10,"column":211}}})) != null ? stack1 : "")
    + ">-</button>\n				<input type=\"number\" name=\"quantity\" id=\"quantity\" data-action=\"changeQuantity\" class=\"product-details-quantity-value\" value=\""
    + alias2(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"quantity") : stack1), depth0))
    + "\" min=\"1\">\n				<button  type=\"button\" class=\"product-details-quantity-add\" data-action=\"updateQuantity\" data-value=\"+1\">+</button>\n			</div>\n		</div>\n		</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "disabled=\"disabled\"";
},"4":function(container,depth0,helpers,partials,data) {
    return "		<input type=\"hidden\" name=\"quantity\" id=\"quantity\" value=\"1\">\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showQuantity") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":18,"column":8}}})) != null ? stack1 : "")
    + "</div>\n\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_details_quantity'; return template;});