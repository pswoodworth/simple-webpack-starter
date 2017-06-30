
var Bleacon = require('bleacon');
var md5 = require('md5');
const Nomad = require('nomad-stream');

var express = require('express')
var app = express()

app.use(express.static('public'));



const nomad = new Nomad();

var visibleBeacons = {};

setInterval(()=>{
  visibleBeacons = {};
},1000);

var uuid;

console.log('starting nomad...');

nomad.prepareToPublish().then(function(nomadInstance) {
  console.log('nomad up at', nomadInstance.identity.ID);

  uuid = md5(nomadInstance.identity.ID);

  console.log('starting beacon at', uuid);

  Bleacon.startAdvertising(uuid);
  Bleacon.startScanning();
  Bleacon.on('discover', function(beacon) {
    visibleBeacons[beacon.uuid] = beacon;
  });
});


app.get('/devices', function(req, res){
  res.json({
    visibleBeacons: visibleBeacons,
    id: uuid
  });
});

app.listen(3000, function () {
  console.log('listening on port 3000!')
})
