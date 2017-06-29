var noble = require('noble');
var bleno = require('bleno');

noble.on('stateChange', function(state) {
  if (state === 'poweredOn') {
    noble.startScanning();
  } else {
    noble.stopScanning();
  }
});


noble.on('discover', function(peripheral) {
  peripheral.connect(function(error) {
    console.log('connected to peripheral: ' + peripheral.uuid);
    peripheral.discoverAllServicesAndCharacteristics((error, services, characteristics)=>{
		console.log('discovered device with characteristics', characteristics);
	});
  });
});

noble.on('stateChange', function(state) {
  if (state === 'poweredOn') {
    noble.startScanning();
  } else {
    noble.stopScanning();
  }
});


bleno.on('stateChange', function(state) {
	var advertisementData = new Buffer("I AM THE TEST DATA");
  if (state === 'poweredOn') {
    bleno.startAdvertisingWithEIRData(advertisementData);
  }
});
