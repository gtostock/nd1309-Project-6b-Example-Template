# Supply chain & data auditing

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

The DApp User Interface when running should look like...

![truffle test](images/ftc_product_overview.png)

![truffle test](images/ftc_farm_details.png)

![truffle test](images/ftc_product_details.png)

## Design
### Activity diagram
![Activity diagram](images/Activity_Diagram.png?raw=true)

### Sequence diagram
![Sequence diagram](images/Sequence_Diagram.png?raw=true)

### State diagram
![State diagram](images/State_Diagram.png?raw=true)

### Class diagram
![Class diagram](images/Class_diagram.png?raw=true)

## Transaction History

### Contract
  https://rinkeby.etherscan.io/address/0x268e5f751c9a039324c988b8565c77d111b50efa

- ConsumerAdded - 0x8c5b02cf5fa90f762ce4e1467c2ea92185c13c34c5833e1a0632075f3c0b9a60
- DistributorAdded - 0x686f6017b9c340be6adf6222fa4c9148aeb32c48c8b345e4fe3c6c0114768357
- RetailerAdded - 0x86b03251f4006a124ebcc83146aa173ba02689d5e9832e1c8081f07317eac0a6
- FarmerAdded - 0xb29142f268fd41e4e492d544cb9d62b48a102b528820a4b9c6790080b5062e27
- TransferOwnership - 0x57157c89ba944ea36c0457019408a98acdc4e8b5ccd6aec74daad23c7f57d39e
- Harvested - 0x57157c89ba944ea36c0457019408a98acdc4e8b5ccd6aec74daad23c7f57d39e
- Processed - 0x486ea2897d8af7fe18a77eb8cc209b997f8e5b99c0d38e8a78f7ab9d31912f67
- Packed - 0xb7dffb7d1c0f5b68d5e4846fe0649aa19e5e2bc231e3be0025ea817a94f9dabc
- ForSale - 0x8da2573e538a5c69d611af9ed7e798daf56f0a50438325103d02e814744ec117
- Sold - 0x4f1c027d23aba14a74df6695546d2bbc74c318e0920957c943de623f0ff02ca2
- Shipped - 0x1d84a36386f6fce72131ee07790b24234ff0c36bfb6de94962caf751d1d924fc
- Received - 0xe0b3d319ccb8c327f253f561ab86315c19d8cea9f767b3fff32bd078aecd8537
- Purchased - 0xc8b0cb3f6b2fee1c693f6fa990704486ad8d9e75a231a927bf793982ba5b935f


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

#### Uninstall

	npm uninstall -g truffle


#### Install

	npm install -g truffle

	npm install -g truffle@3.2.2
		or
	npm update -g truffle@3.2.2

### Installing

A step by step series of examples that tell you have to get a development env running

Clone this repository:

https://github.com/gtostock/nd1309-Project-6b-Example-Template.git

Change directory to ```project-6``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd project-6
npm install
```

Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

Your terminal should look something like this:

![truffle test](images/ganache-cli.png)

In a separate terminal window, Compile smart contracts:

```
truffle compile
```

Your terminal should look something like this:

![truffle test](images/truffle_compile.png)

This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Your terminal should look something like this:

![truffle test](images/truffle_migrate.png)

Test smart contracts:

```
truffle test
```

All 10 tests should pass.

![truffle test](images/truffle_test.png)

Migrating to rinkeby network:

```
sudo truffle migrate --reset --network rinkeby
```

In a separate terminal window, launch the DApp:

```
npm run dev

URL - http://localhost:3000/

```

## Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [IPFS](https://ipfs.io/) - IPFS is the Distributed Web | A peer-to-peer hypermedia protocol
to make the web faster, safer, and more open.
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.


## Authors


## Acknowledgments

* Solidity
* Ganache-cli
* Truffle
* IPFS
