
var Bleacon = require('bleacon');
var md5 = require('md5');
const Nomad = require('nomad-stream');


const nomad = new Nomad();

var uuid;

console.debug('starting nomad...');

nomad.prepareToPublish().then(function(nomadInstance) {
  console.debug('nomad up at', nomadInstance.identity.ID);

  uuid = md5(nomadInstance.identity.ID);

  console.debug('starting beacon at', uuid);

  Bleacon.startAdvertising(uuid);
  Bleacon.startScanning();
  Bleacon.on('discover', function(bleacon) {
    console.log('discovered beacon with uuid', bleacon);
  });
});
