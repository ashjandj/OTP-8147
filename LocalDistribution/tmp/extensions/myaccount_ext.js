var extensions = {};

extensions['JJ.wishlist.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/JJ/wishlist/1.0.0/' + asset;
}

// @module JJ.wishlist.wishlist
define('JJ.wishlist.wishlist.View'
,	[
	'jj_wishlist_wishlist.tpl'
	
	,	'JJ.wishlist.wishlist.SS2Model'
	
	,	'Backbone',
	
    ]
, function (
	jj_wishlist_wishlist_tpl
	
	,	wishlistSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class JJ.wishlist.wishlist.View @extends Backbone.View
	return Backbone.View.extend({

		template: jj_wishlist_wishlist_tpl

	,	initialize: function (options) {
		this.on('afterViewRender', this.bindFavoriteButton);
			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new wishlistModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		},bindFavoriteButton: function () {
			const favButton = this.$el.find('.fav-button');
			favButton.on('click', function () {
				favButton.toggleClass('active');
			});
			console.log(this.$el.baseURI)
			
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return JJ.wishlist.wishlist.View.Context
	,	getContext: function getContext()
		{
			//@class JJ.wishlist.wishlist.View.Context
			this.message = this.message || 'Hello World!!'
			console.log("view2")
			return {
				message: this.message
			};
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("JJ.wishlist.wishlist.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/wishlist.Service.ss"
            )
        )
        
});
});


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


define(
    'JJ.wishlist.wishlist',
    [
        'JJ.wishlist.wishlist.View',
        'Facets.ItemCell.View'
    ],
    function (
        wishlistView,
        FacetsBrowseView
    ) {
        'use strict';

        return {
            mountToApp: function mountToApp(container) {
                //Inject the child view to the new view. 
                if (FacetsBrowseView) {
                    FacetsBrowseView.addChildViews({
                        'Cart.QuickAddToCart': {
                            'Wishlist.View': {
                                childViewIndex: 10, 
                                childViewConstructor: function () {
                                    return new wishlistView({ container: container });
                                }
                            }
                        }
                    });
                    // _.extend(FacetsBrowseView.prototype, {

                    //     initialize: _.wrap(FacetsBrowseView.prototype.initialize, function (fn) {
    
                    //         fn.apply(this, _.toArray(arguments).slice(1));
    
                    //         this.on('beforeCompositeViewRender', function beforeCompositeViewRender() {
    
                    //             this.$el.find('.facets-items-collection-view-row').after('<div data-view="Notifybutton">Hello</div>');
    
                    //         });
    
                    //     })
    
                    // });
                } else {
                    console.log("FacetsBrowseView component is not available.");
                }
            }
        };
    }
);


};

SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["JJ.wishlist.wishlist.View","JJ.wishlist.wishlist.Model","JJ.wishlist.wishlist.SS2Model"];
try{
	extensions['JJ.wishlist.1.0.0']();
	SC.addExtensionModule('JJ.wishlist.wishlist');
}
catch(error)
{
	console.error(error);
}

