var express = require('express')
var request = require('request');
const URL = require('url').URL;

var app = express()

var host = 'http://wlppr.cc/api/v1';
var client_id = 'A49884D8-4AE6-4CEF-87AC-343F808A6D37';
var client_token = 'c020c291e1dbf98ac2f90df52c428960';

app.get('/themes', function (req, res) {

  var requestUrl = new URL(host + req.url.toString());
  console.log(requestUrl.href);
  requestUrl.searchParams.append('client_id', client_id);
  requestUrl.searchParams.append('client_token', client_token);
  console.log(requestUrl.href);
  requestUrl.searchParams.append('client_id', client_id);
  requestUrl.searchParams.append('client_token', client_token);
  request.get(requestUrl.href, {},
    function (err, ress, body) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Content-Type', 'application/json');
      res.send(ress.body)
    })
})

app.get('/wallpapers', function (req, res) {
  var requestUrl = new URL(host + req.url.toString());
  console.log(requestUrl.href);
  requestUrl.searchParams.append('client_id', client_id);
  requestUrl.searchParams.append('client_token', client_token);
  request.get(requestUrl.href, {},
    function (err, ress, body) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Content-Type', 'application/json');
      res.send(ress.body)
    })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})