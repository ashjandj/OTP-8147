var extensions = {};

extensions['JJ.wishlist.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/JJ/wishlist/1.0.0/' + asset;
}

define('JJ.wishlist.wishlist.View', 
    [ 
        'jj_wishlist_wishlist.tpl', 
        'JJ.wishlist.wishlist.SS2Model', 
        'Backbone'
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
				let gridCount = 0;
				console.log(gridCount);
				gridCount=gridCount+1;
				console.log(gridCount);
            }, 
    
            bindFavoriteButton: function () { 
                const favButton = this.$el.find('.fav-button'); 
                favButton.on('click', (e) => { 
                    e.stopPropagation();
                    favButton.toggleClass('active'); 
                    const itemDetails = this.getItemDetails($(e.currentTarget)); 
                    this.sendItemDetails(itemDetails);
                }); 
            },
    
            getItemDetails: function (button) {
                const itemCell = button.closest('.facets-item-cell-grid'); 
                return {
                    itemId: itemCell.data('item-id'),
                    name: itemCell.find('.facets-item-cell-grid-title span').text(),
                    sku: itemCell.data('sku'),
                    url: itemCell.find('meta[itemprop="url"]').attr('content')
                };
            },
    
            sendItemDetails: function (itemDetails) {
                console.log('Sending item details:', itemDetails); 
                this.setCookie('wishlistItem', JSON.stringify(itemDetails), 7); 
            }, 

            setCookie: function (name, value, days) {
                let expires = "";
                if (days) {
                    const date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    expires = "; expires=" + date.toUTCString();
                }
                document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Strict";
            },

            getCookie: function (name) {
                const nameEQ = name + "=";
                const ca = document.cookie.split(';');
                for (let i = 0; i < ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
                }
                return null;
            },
    
            events: {}, 
    
            bindings: {}, 
    
            childViews: {}, 
    
            getContext: function getContext() { 
				
                return { 
                    itemData: this.itemData || []  // Pass item data to template
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
        'Facets.ItemCell.View',
        'Facets.Model',
        
    ],
    function (
        wishlistView,
        FacetsBrowseView,
        FacetsModel
        
    ) {
        'use strict';

        return {
            mountToApp: function mountToApp(container) {
                const facetsModel = new FacetsModel({
					searchApiMasterOptions: {  }
				});
                let itemInternalIdArray = [];
				facetsModel.fetch({
					success: function(model, response) {
                        let itemId=model.get('items');
                        for(let i=0;i<itemId.models.length;i++)
                        {
                        itemInternalIdArray.push(itemId.models[i].attributes.internalid);}
					},
					error: function(model, response) {
						console.error('Error fetching items:', response);
					}
				});
               

                if (FacetsBrowseView) {
                    FacetsBrowseView.addChildViews({
                        'ItemDetails.Options': {
                            'Wishlist.View': {
                                childViewIndex: 10, 
                                childViewConstructor: function () {
                                    return new wishlistView({ container: container,itemInternalIdArray:itemInternalIdArray });
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

