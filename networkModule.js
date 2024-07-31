
const os = require('os');

function getNetworkInfo() {
  const networkInterfaces = os.networkInterfaces();
  const networkInfo = {};

  for (const interfaceName in networkInterfaces) {
    networkInfo[interfaceName] = networkInterfaces[interfaceName].map(address => ({
      Familia: address.family,
      Dirección: address.address,
      Interno: address.internal
    }));
  }

  return networkInfo;
}

module.exports = getNetworkInfo;
