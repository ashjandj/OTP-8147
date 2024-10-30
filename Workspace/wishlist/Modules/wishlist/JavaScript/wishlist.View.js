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
