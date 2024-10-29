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
