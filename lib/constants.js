'use strict';


module.exports = {
  BITCOIN_GENESIS_HASH: {
    livenet: '00000000445999647df11eba1ac9c2fbb52c5c271417292e13b3282d004a3dc3',
    regtest: '5ddec2ed236f7b4a8a2d8eea78045fae738d3897a3b53965c0b8acef4804e171',
    testnet: '00000000bb9fb8ac0c6e7d49cd45d25be8cca7065233820d7eff340476be3875', //this is testnet3
    testnet5: '00000000bb9fb8ac0c6e7d49cd45d25be8cca7065233820d7eff340476be3875' //this is testnet5
  },
  DB_PREFIX: new Buffer('ffff', 'hex')
};

