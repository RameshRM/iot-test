'use strict';

const path = require('path');
module.exports.deviceConfig = function() {
  let basePath = process.cwd();
  return {
    keyPath: path.join(basePath, '.cert/device/thing.pvt.key'),
    certPath: path.join(basePath, '.cert/device/thing.cert.pem'),
    caPath: path.join(basePath, '.cert/root-CA.cert'),
    region: process.env.REGION,
    host: process.env.IOT_HOST,
    debug: process.env.DEBUG,
    connectTimeout: process.env.TIMEOUT || 50000
  };

};
