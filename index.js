// var noble = require('noble');
// var bleno = require('bleno');
//
// noble.on('stateChange', function(state) {
//   if (state === 'poweredOn') {
//     noble.startScanning();
//   } else {
//     noble.stopScanning();
//   }
// });
//
//
// noble.on('discover', function(peripheral) {
//   console.log('found', peripheral);
//   // peripheral.connect(function(error) {
//   //   console.log('connected to peripheral: ' + peripheral.uuid);
//   //   peripheral.discoverAllServicesAndCharacteristics((error, services, characteristics)=>{
// 	// 	console.log('discovered', services, 'with characteristics', characteristics);
// 	// });
//   // });
// });
//
// noble.on('stateChange', function(state) {
//   if (state === 'poweredOn') {
//     noble.startScanning();
//   } else {
//     noble.stopScanning();
//   }
// });
//
//
// bleno.on('stateChange', function(state) {
// 	var advertisementData = new Buffer("I AM THE TEST DATA");
//   if (state === 'poweredOn') {
//     console.log('broadcasting on')
//     bleno.startAdvertisingWithEIRData(advertisementData);
//   }
// });


var Bleacon = require('bleacon');
var uuid = 'e2c56db5dffb48d2b060d0f5a71096e0';
var major = 0; // 0 - 65535
var minor = 0; // 0 - 65535
var measuredPower = -59; // -128 - 127 (measured RSSI at 1 meter)

Bleacon.startAdvertising(uuid, major, minor, measuredPower);
Bleacon.startScanning();

Bleacon.on('discover', function(bleacon) {
  console.log('discovered', bleacon);
});
