
function service(request, response)
{
	'use strict';
	try 
	{
		require('JJ.wishlist.wishlist.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('JJ.wishlist.wishlist.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}