//first node.js workshop

console.log("Hello World!");

setTimeout(function(){
    console.log("Hello World Again!");},10000);

//continue workshop in this file

//Find out latitude and longitude of the International Space Station

Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
}

var request = require('request');

var prompt = require('prompt');

request("http://api.open-notify.org/iss-now.json", function(err, res, body) {
    if (!err) {
        var issInfo = JSON.parse(body);
        
        var x = issInfo.iss_position.latitude;
        var twoDecimalX = x.toFixed(2);
        var y = issInfo.iss_position.longitude;
        var twoDecimalY = y.toFixed(2);
        
        console.log("ISS location: " + twoDecimalX + "," + twoDecimalY);
    }
    else {
        console.log("there was an error: " + err);
    }
    
});



//Calculation of distance between ISS and user's location


 
  prompt.start();

    console.log("What is your location");
    
  prompt.get(["location"], function (err, result) {
      
     var locationUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + result.location;
     
        request(locationUrl, function(err, res, body) {
        if (!err) {
            var userLocation = JSON.parse(body);
            
            var userLat = userLocation.results[0].geometry.location.lat;
             var userLng = userLocation.results[0].geometry.location.lng;


        console.log("Your exact location is " + userLat + "," + userLng);
    }
    else {
        console.log("there was an error: " + err);
    }
    });
  
  
});


 

  
