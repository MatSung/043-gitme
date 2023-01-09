const request = require('request');

module.exports.getPlaces = function() {
	return new Promise(function(resolve) {
		request.get('https://api.meteo.lt/v1/places').then(response => {
			let places = JSON.parse(response.body);

			resolve(places);
		});
	});
}

module.exports.getPlaceWeather = placeCode => {
	return new Promise(resolve => {
		request.get('https://api.meteo.lt/v1/places/' + placeCode + '/forecasts/long-term').then(response => {
			let observations = JSON.parse(response.body);

			resolve(observations);
		});
	});
}

