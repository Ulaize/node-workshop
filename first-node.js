//first node.js workshop

console.log("Hello World!");

setTimeout(function(){
    console.log("Hello World Again!");},10000);

//continue workshop in this file

//Find out latitude and longitude of the International Space Station

var request = require('request');

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
