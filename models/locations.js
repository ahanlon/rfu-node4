var allLocations = [];

var VoyageStop = function(name, next, image){
	this.name = name;
	this.slug = name.trim().toLowerCase().replace(/ /g, '-');
	this.next = next;
	this.slugNext = next.trim().toLowerCase().replace(/ /g, '-');
	this.image = image;
};

var addStop = function(name, next, image){
	var newStop = new VoyageStop(name, next, image);
	allLocations.push(newStop);
};

addStop('Seville', 'Canary Islands', 'http://www.telegraph.co.uk/travel/destination/article154544.ece/ALTERNATES/w460/Seville-spanish-square.jpg')
addStop('Canary Islands', 'Cape Verde', 'http://c.tadst.com/gfx/600x400/canary-islands.jpg?1')
addStop('Cape Verde', 'Strait of Magellan', 'http://spot.zone/wp-content/uploads/2015/01/Cape-Verde.jpg')
addStop('Strait of Magellan', 'Guam', 'https://c1.staticflickr.com/5/4037/4445350051_9b1c749d0b_b.jpg')
addStop('Guam', 'Philippines', 'http://www.thedailychronic.net/wp-content/uploads/2015/07/Guam-from-air.jpg')
addStop('Philippines', 'finalstop', 'http://cdn.thebeachfrontclub.com/media/upload/photos/Philippines_Boracay_Diniwid_Beach_overview_of_beach_7781_2.JPG')


var findStop = function(slug){
	return allLocations.filter(function(thisStop){
		return thisStop.slug === slug;
	})[0]
console.log(findStop);
};


module.exports = {
	allLocations 	: allLocations, 
	VoyageStop 		: VoyageStop,
	addStop			: addStop,
	findStop		: findStop,
};