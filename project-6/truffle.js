const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      //host: "192.168.1.202",
      //port: 7545,
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
     provider: function() {
    return new HDWalletProvider("over sister soft convince lunar muscle success wife want spare ribbon blast", 
         "https://rinkeby.infura.io/v3/8697be95b7894b78b421b5e86258740f")
        },
         network_id: '4',
         gas: 4500000,
         gasPrice: 10000000000,
       }
  }
  ,
  compilers: {
   solc: {
     version: "0.4.24" // ex:  "0.4.20". (Default: Truffle's installed solc)
   }
  }
};