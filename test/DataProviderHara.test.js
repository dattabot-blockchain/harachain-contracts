const expectRevert = require("./helpers/expectRevert");

const DataProviderHara = artifacts.require('DataProviderHara');

contract('DataProviderHara', accounts => {
  let dataProvider;
  const owner = accounts[0];
  const notOwner = accounts[1];

  // const initLocatioId = web3.utils.asciiToHex("petaniA");
  const initLocatioId = "1";
  const initPriceId = "0";
  const initEndpoint = "http://endpoint.hara.com/get_data";
  const initUri = initEndpoint + "?id=" + initLocatioId + "&&version=" + initPriceId;

  before(async function () {
    dataProvider = await DataProviderHara.new({ from: owner });
  });

  it('can not get uri because endpoint not set', async function () {
    await expectRevert(
      dataProvider.getUri(initLocatioId, initPriceId)
    );
  });

  it('set endpoint by data provider owner', async function () {
    const receipt = await dataProvider.setEndpoint("0x0", initEndpoint, {from: owner});
    const log = receipt.receipt.logs[0]
    assert.strictEqual(log.event, "EndpointChangedLog");
    assert.strictEqual(log.args.oldEndpoint, "")
    assert.strictEqual(log.args.newEndpoint, initEndpoint);
    assert.strictEqual(log.args.by, owner);
  });

  it('can not set endpoint by not owner', async function () {
    await expectRevert(
      dataProvider.setEndpoint("0x0", initEndpoint, {from: notOwner})
    );
  });

  it('return Uri', async function () {
    const uri = await dataProvider.getUri(initLocatioId, initPriceId);
    assert.strictEqual(initUri, uri);
  });
});