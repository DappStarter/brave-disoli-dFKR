require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski stone cruise soap unique hard light army gauge'; 
let testAccounts = [
"0xdf36bad4abd9eb889f4c391686080e726d069929d1b5e68e4d2c7f9689158bcf",
"0x3276642f5403224a986607ab7d8ba6f9f784e6ceb24c1cbb363b9fa8ee28065f",
"0xbdaab6d33afb841b77c2056d638c83405f0ca17ee904c8d5c8d8761222c92aa7",
"0xf019c3dc96a1100110ae8f6a5a740ecc51d66f8bce4762832cd2a1ba5412acf3",
"0x844b5a1973899a63f3d234cd59f11d1b144b577275a948182fa241ce1e93cfe6",
"0xe571c0578c16bfc3684d3711a5858474cc75d7181954a2f58395f46c4a0175fb",
"0x239f47770ad0a90abb062252a72a4a256dc8b98a417b00ef3ceb150e2b83663f",
"0xdaa237f8abbfa7037000188fe444ca7ab8a806ee698a095c06120b19205cdb48",
"0xe445faf196163bd6530e28e8710003dc6a05a6f53502893dfe7b7179c849cd9d",
"0x55bf8e45cf1fa67e2dddd0c4e08fa9f8eb4cd2d8a5074d4646bd8db3bc3c5f6e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


