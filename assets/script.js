var API = "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139";

if(navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position.coords.latitude, position.coords.longitude);
        //prompt("Enter Number Here Ashish");
        //console.log("Ashish Goyal");
        $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat="+position.coords.latitude+"&lon="+position.coords.longitude,function (data) {
            //console.log(data.main.temp);
            //console.log("Ashish");
            //console.log("Ashish your Request Has Been completed");
            console.log(data);
            console.log(data.main.temp, data.main.temp_max, data.main.temp_min, data.weather[0].icon);
            $("span.current_location").text(data.name);
            $("span.temp").text(data.main.temp);
            $("span.temp_max").text(data.main.temp_max);
            $("span.temp_min").text(data.main.temp_min);
            if(data.weather[0].icon)
            {
                $("div.weather-image").append("<img src="+data.weather[0].icon+">");
            }
            else
            {
                $("div.weather-image").append("<img src='./assets/weather.png'>");
            }

        });
    });


}
//console.log("Ashish");


//it is a nodeJS server for getting response in JSON format..
/*var express = require('express');
var request = require('request');

var app = express();

request("https://fcc-weather-api.glitch.me/api/current?lat=31.253925900000002&lon=75.7240654",function (err,res, body) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(JSON.parse(body));
    }
});*/
