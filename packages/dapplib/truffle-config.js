require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope enroll sure trophy name rate machine uncover give enroll slot gesture'; 
let testAccounts = [
"0xb308766a3aace8b544de6d30f3abeaef74c89b6d3c5bf59a265ffa01096c2aba",
"0x6a28f46cf74c605ae8f9a7c915cdd104837d4cf7eb819891a09b51c9899a6c90",
"0x5cca3022dff30655c0de98761a997de73650c89e3c49c55dc848d8c9580d6753",
"0xd15d423ff51402482e4a2550a740a5aedc9822e343d5173102defe5863503109",
"0x747593d25f41cb9a64c0ff40f861b2ae411a0a190fdc29794715af24644264cb",
"0x9e1cbb972c26ed31cd39496e01e63a25795f473534d6c86584b4510cd2114d0e",
"0x5ea0a36028ed049a712d222eb5d6695a3c32d7f428a4795688e02778cd7788d1",
"0x2a9f9d3d7b34460af7b47111d7e378273505052db9f65154c7464898761c3747",
"0x0ca6e2ec648c990dbdc652431f85a3e3aa943dbb1aa80be93dcee0b5cc3c4529",
"0x399ff9604dd3ad2336d0483ee71803339558e6c0a57695b8de3eccd63f8e89d6"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
