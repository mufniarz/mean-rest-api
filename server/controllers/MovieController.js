var restful = require('node-restful');

module.exports = function(app, route) {

	// Setup the controller for REST.
	var rest = restful.model(
		'movie',
		app.models.movie  // app.models is the list of models that were assigned to app.
		).methods(['get', 'put', 'post', 'delete']);
		// Exposes the get, put, post and delete for this model.

	// Register this endpoint with the application.
	rest.register(app, route);

	// Return middleware.
	return function(req, res, next) {
		next();
	};
};