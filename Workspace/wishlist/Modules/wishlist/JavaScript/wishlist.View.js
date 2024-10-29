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
	