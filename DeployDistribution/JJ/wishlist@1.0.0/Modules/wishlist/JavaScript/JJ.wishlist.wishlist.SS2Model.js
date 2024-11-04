// Model.js
// -----------------------
// @module Case
define("JJ.wishlist.wishlist.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/wishlist/SuiteScript2/wishlist.Service.ss"
            ),
            true
        )
});
});
