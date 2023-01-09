const MeteoApiService = require('../../../services/MeteoApiService');
const express = require('express');
const router = express.Router();

router.get('/places/find/:name', function (req, res, next) {
	MeteoApiService.getPlaces().then(places => {
		places = places.filter(p => p.name.toLowerCase().startsWith(req.params.name.toLowerCase()));

		places = places.slice(0, 10);

		res.json(places);

	});
});

router.get('/places/:name', (req, res) => {
	MeteoApiService.getPlaceWeather(req.params.name).then(observations => {
		res.json(observations);
	});
});


// give a state, returns icon name, or should i send file
router.get('/weather/icon/:name', (req, res) => {
	res.send("./svg/" + req.params.name + ".svg");
});

module.exports = router;
