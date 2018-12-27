module.exports.stringToBytes32 = function (string) {
    var hexString = web3.utils.asciiToHex(string);
    return web3.utils.padRight(hexString, 64)
  };
  
  module.exports.decodeLogsByTopic = function (topic, inputAbi, logs) {
    var decoded = [];
    for (i in logs) {
      if (logs[i].topics[0] == topic) {
        var a = web3.eth.abi.decodeLog(inputAbi, logs[i].data, logs[i].topics);
        decoded.push(a);
      }
    }
    return decoded;
  }