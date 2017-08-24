/*
if(navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position.coords.latitude, position.coords.longitude);
        console.log("Ashish Goyal");
    })
}
console.log("Ashish");*/


//it is a nodeJS server for getting response in JSON format..
var express = require('express');
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
});