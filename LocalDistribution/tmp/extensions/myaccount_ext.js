var extensions = {};

extensions['JJ.wishlist.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/JJ/wishlist/1.0.0/' + asset;
}

define('JJ.wishlist.wishlist.View', 
	[ 
		'jj_wishlist_wishlist.tpl', 
		'JJ.wishlist.wishlist.SS2Model', 
		'Backbone', 
	], function ( 
		jj_wishlist_wishlist_tpl, 
		wishlistSS2Model, 
		Backbone 
	) { 
		'use strict'; 
	
		return Backbone.View.extend({ 
			template: jj_wishlist_wishlist_tpl, 
	
			initialize: function (options) { 
				this.on('afterViewRender', this.bindFavoriteButton); 
			}, 
	
			// Bind favorite button and item click event
			bindFavoriteButton: function () { 
				const favButton = this.$el.find('.fav-button'); 
				favButton.on('click', (e) => { 
					e.stopPropagation(); // Prevent event bubbling
					favButton.toggleClass('active'); 
					const itemDetails = this.getItemDetails($(e.currentTarget)); // Get item details
					this.sendItemDetails(itemDetails); // Send item details
				}); 
			},
	
			// Get item details from the clicked item
			getItemDetails: function (button) {
				const itemCell = button.closest('.facets-item-cell-grid'); // Get the parent item cell
				return {
					itemId: itemCell.data('item-id'),
					name: itemCell.find('.facets-item-cell-grid-title span').text(),
					sku: itemCell.data('sku'),
					url: itemCell.find('meta[itemprop="url"]').attr('content')
				};
			},
	
			
			sendItemDetails: function (itemDetails) {
				console.log('Sending item details:', itemDetails); 
				
			}, 
	
			events: {}, 
	
			bindings: {}, 
	
			childViews: {}, 
	
			getContext: function getContext() { 
				this.message = this.message || 'Hello World!!'; 
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

