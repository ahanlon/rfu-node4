var location = require('../models/locations.js');

var indexController = {
	index: function(req, res) {
		res.render('locations', {location : location.allLocations[0]});
	},

	locationPage : function(req, res){
		var locationSlug = req.params.slug;
		var foundStop = location.findStop(locationSlug);

		res.render('locations', {location : foundStop});
	}
};

module.exports = indexController;