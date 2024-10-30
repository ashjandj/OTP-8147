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
                
                if (FacetsBrowseView) {
                    FacetsBrowseView.addChildViews({
                        'ItemDetails.Options': {
                            'Wishlist.View': {
                                childViewIndex: 10, 
                                childViewConstructor: function () {
                                  
                                    return new wishlistView({ container: container,model:this.model });
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
