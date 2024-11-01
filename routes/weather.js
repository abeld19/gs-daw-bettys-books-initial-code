const request = require('request')
const express = require('express')
const router = express.Router()
let apiKey = '61b40b621cc2a8786fcf0e8f07a6c50b';


//new route for weather called londonnow
router.get('/', (req, res, next) => {
    if  (req.query.city ==null){
        city = 'london'

    } else {
        city = req.sanitize (req.query.city)
    }
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
             
request(url, function (err, response, body) {
  if(err){
    next(err);
  } else {
    //res.send(body);
    var weather = JSON.parse(body)
    if (weather!==undefined && weather.main!==undefined) {
res.render('weather', {weather: weather});
    } else {
        res.send ("No data found");
    }
    
  } 

});
});


module.exports = router;

