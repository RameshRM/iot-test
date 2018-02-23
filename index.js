'use strict';

const awsIot = require('aws-iot-device-sdk');
const debug = require('debug')('iot-test');
const util = require('util');

const confit = require('./config');

setImmediate(function() {

  var Device;
  if (!confit.deviceConfig()) {
    return;
  }
  var deviceArgs = Object.assign({}, confit.deviceConfig());
  Device = tryGetDevice(deviceArgs);
  console.log(Device);
});


function tryGetDevice(deviceArgs) {
  try {
    console.log()
    return awsIot.device(deviceArgs)
  } catch (e) {
    console.log(e);
    debug('Unable to get Device', e);
  }
}
