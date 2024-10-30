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
            // Bind after view render for any DOM manipulations
            this.on('afterViewRender', this.handleAfterRender);

            // Retrieve item ID and wishlist items from the cookie
            this.itemId = options.model.attributes.internalid;
            this.wishlistItems = JSON.parse(this.getCookie("wishlistItem12") || "[]");
        },

        handleAfterRender: function () {
            const favButton = this.$el.find('.fav-button');

            // Log button, item ID, and wishlist items for troubleshooting
            console.log('Fav Button:', favButton);
            console.log('Current Item ID:', this.itemId);
            console.log('Wishlist Items:', this.wishlistItems);

            // Check if item is in the wishlist, and if so, set 'active' class
            if (this.wishlistItems.includes(this.itemId)) {
                favButton.addClass('active'); // Ensures it’s in the active state
            }

            // Bind the favorite button click handler
            this.bindFavoriteButton();
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
            if( this.wishlistItems.includes(itemDetails.itemId))
            {
                this.setCookie('wishlistItem12', itemDetails.itemId, 7,false);
            }else{
                this.setCookie('wishlistItem12', itemDetails.itemId, 7,true);
            }
            
        },

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

            if(status)
            {
                if (Array.isArray(array)) {
                    array.push(value);
                } else {
                    console.error("The retrieved cookie value is not an array, resetting to empty array.");
                    array = [value];
                }
            }else
            {
                if (Array.isArray(array)) {
                    array = array.filter(item => item !== value); // Removes all instances of `value`
                } else {
                    console.error("The retrieved cookie value is not an array, resetting to empty array.");
                    array = [];
                }
                
            }

            document.cookie = `${name}=${JSON.stringify(array)}${expires}; path=/; SameSite=Strict`;
        },

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

        getContext: function () {
            return {
                itemData: this.itemData || []
            };
        }
    });
});
