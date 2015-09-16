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

var issX = 0;
var issY=0;

request("http://api.open-notify.org/iss-now.json", function(err, res, body) {
    if (!err) {
        var issInfo = JSON.parse(body);
        
        issX = issInfo.iss_position.latitude;
        var twoDecimalX = issX.toFixed(2);
        issY = issInfo.iss_position.longitude;
        var twoDecimalY = issY.toFixed(2);
        
        console.log("ISS location: " + twoDecimalX + "," + twoDecimalY);
        
        theUserLocation();
            
    }
    else {
        console.log("there was an error: " + err);
    }
    
    
});

 


//Calculation of distance between ISS and user's location

function theUserLocation (){

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
                    console.log(issX+ " "+ issY);
                    
                    var userIssDistance = distance(issX,userLat,issY,userLng);
                    
                    console.log("You are " + userIssDistance + "meters far from ISS");
                }
                else {
                    console.log("there was an error: " + err);
                }
            });
  
  
    });

}


function distance(lat1,lat2,lon1,lon2){

    var R = 6371000; // metres
    var φ1 = lat1.toRadians();
    var φ2 = lat2.toRadians();
    var Δφ = (lat2-lat1).toRadians();
    var Δλ = (lon2-lon1).toRadians();
    
    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
    var d = R * c;
    
    return d;
};

  
