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
        'ProductList.Control.View',
        'ProductList.ControlSingle.View'
    ],
    function (
        jj_wishlist_wishlist_tpl,
        wishlistSS2Model,
        Backbone,
        ProductListControlView,
        ProductListControlSingleView
    ) {
        'use strict';

        /**
         * Wishlist View.
         * @module JJ.wishlist.wishlist.View
         */
        return Backbone.View.extend({
            template: jj_wishlist_wishlist_tpl,

            /**
             * Initializes the view.
             * @param {Object} options - Options for the view.
             * @param {Object} options.model - The model containing item details.
             */
            initialize: function (options) {
             
                this.on('afterViewRender', this.handleAfterRender);
                this.itemId = options.model.attributes.internalid;
                this.wishlistItems = JSON.parse(this.getCookie("wishlistItem12") || "[]");
               
                this.collection = options.model.collection;
                this.application = options.container;
                this.productModel = options.productModel;

                this.utils =
                this.application.ProductListModule && this.application.ProductListModule.Utils;
               
                console.log("this.utils",this.utils.getProductLists());
               
                this.productListControlView =  new ProductListControlView({
                    collection: this.utils.getProductLists(),
                    product: this.model,
                    application: this.application,
                    countedClicks: {},
                    moveOptions: true,
                });

                console.log("ProductListControlView instance:", this.productListControlView);
            },

            /**
             * Handles actions after the view has rendered.
             */
            handleAfterRender: function () {
                const favButton = this.$el.find('.fav-button');
                this.utils =
                this.application.ProductListModule && this.application.ProductListModule.Utils;
                const utils = this.utils.getProductLists();
                console.log("binded utils",utils)
                // Check if item is in the wishlist and set the active class if true
                if (this.wishlistItems.includes(this.itemId)) {
                    favButton.addClass('active');
                }

                // Bind the favorite button click handler
                this.bindFavoriteButton(utils);
            },

            /**
             * Binds the favorite button click event.
             */
            bindFavoriteButton: function (utils) {
                const favButton = this.$el.find('.fav-button');
            
                favButton.on('click', (e) => {
                    e.stopPropagation();
                    favButton.toggleClass('active');
                    const itemDetails = this.getItemDetails($(e.currentTarget));
            
                    // Now you can use the utils object here directly
                    this.sendItemDetails(itemDetails, e, utils);
                });
            },

            /**
             * Retrieves item details from the button.
             * @param {jQuery} button - The button element.
             * @returns {Object} - The item details.
             */
            getItemDetails: function (button) {
                const itemCell = button.closest('.facets-item-cell-grid');
                return {
                    itemId: itemCell.data('item-id'),
                    name: itemCell.find('.facets-item-cell-grid-title span').text(),
                    sku: itemCell.data('sku'),
                    url: itemCell.find('meta[itemprop="url"]').attr('content')
                };
            },

            /**
             * Sends item details to be added or removed from the wishlist.
             * @param {Object} itemDetails - The details of the item.
             */
            sendItemDetails: function (itemDetails, e, utils) {
               
                let wishlistItems = JSON.parse(this.getCookie("wishlistItem12") || "[]");

                if (wishlistItems.includes(itemDetails.itemId)) {
                    this.setCookie('wishlistItem12', itemDetails.itemId, 7, false);
                } else {
                    this.setCookie('wishlistItem12', itemDetails.itemId, 7, true);
                }

                // Check if productListControlView is defined
                if (this.productListControlView) {
                    if (this.productListControlView.validateLogin()) {
                        // Call the wrapper function to log parameters
                        this.addItemToListWithLogging(this.productModel,utils);
                    }
                } else {
                    console.error("productListControlView is undefined.");
                }
            },

            /**
             * Wrapper function to log parameters for addItemToList.
             * @param {Object} line - The product model to add.
             */
            addItemToListWithLogging: function (line,utils) {
               
                console.log( utils)
               
                console.log("Internal ID:", utils.get('internalid'));
                let returnthing= this.productListControlView.addItemToList(line, utils, true)
                    .then((result) => {
                        console.log('Result of addItemToList:', result);
                    })
                    .catch((error) => {
                        console.error('Error adding item to list:', error);
                    });
                console.log(returnthing)
            },

            /**
             * Sets a cookie with the given parameters.
             * @param {string} name - The name of the cookie.
             * @param {string} value - The value to set.
             * @param {number} days - Number of days until the cookie expires.
             * @param {boolean} status - Indicates if the item should be added or removed.
             */
            setCookie: function (name, value, days, status) {
                let expires = "";
                if (days) {
                    const date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    expires = "; expires=" + date.toUTCString();
                }

                let array = [];
                const cookieValue = this.getCookie(name);

                if (cookieValue) {
                    try {
                        array = JSON.parse(cookieValue);
                    } catch (e) {
                        console.error("Failed to parse cookie value:", e);
                        array = [];
                    }
                }

                if (status) {
                    // Add item to the wishlist
                    if (!array.includes(value)) {
                        array.push(value);
                    }
                } else {
                    // Remove item from the wishlist
                    array = array.filter(item => item !== value);
                }

                document.cookie = `${name}=${JSON.stringify(array)}${expires}; path=/; SameSite=Strict`;
            },

            /**
             * Retrieves the value of a cookie by name.
             * @param {string} name - The name of the cookie.
             * @returns {string|null} - The cookie value or null if not found.
             */
            getCookie: function (name) {
                const nameEQ = `${name}=`;
                const ca = document.cookie.split(';');
                for (let i = 0; i < ca.length; i++) {
                    let c = ca[i].trim();
                    if (c.indexOf(nameEQ) === 0) {
                        return c.substring(nameEQ.length, c.length);
                    }
                }
                return null;
            },

            events: {},

            bindings: {},

            childViews: {},

            /**
             * Returns the context for rendering the template.
             * @returns {Object} - The context object.
             */
            getContext: function () {
                return {
                    itemData: this.itemData || []
                };
            }
        });
    }
);



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
        'ProductList.Control.View',
        'Product.Model' 
        
    ],
    function (
        wishlistView,
        FacetsBrowseView,
        FacetsModel,
        ProductListControlView,
        ProductModel
       
    ) {
        'use strict';

        return {
            mountToApp: function mountToApp(container) {
                
                if (FacetsBrowseView) {
                    // Initialize ProductModel
                    const productModelInstance = new ProductModel();

                    FacetsBrowseView.addChildViews({
                        'ItemDetails.Options': {
                            'Wishlist.View': {
                                childViewIndex: 10, 
                                childViewConstructor: function () {
                                    return new wishlistView({ 
                                        container: container,
                                        productModel: productModelInstance,
                                        model : this.model
                                    });
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

