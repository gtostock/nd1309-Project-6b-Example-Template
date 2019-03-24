# Blockchain Nanodegree - Supply Chain

This project contains a smart contract implementation for a  a supply chain. 

Following contracts are implemented -
- contract AccessControl
- contract Base is AccessControl
- contract Core is Base

##AccessControl - Collection of Contracts: Defines various actors and there roles and responsibilities.

4 actors in a coffee supply chain are:

Farmer: The Farmer can harvest coffee beans, process coffee beans, pack coffee palettes, add coffee palettes, ship coffee palettes, and track authenticity.
Distributor: The Distributor can buy coffee palettes and track authenticity.
Retailer: The Retailer can receive coffee palettes and track authenticity.
Consumer: The consumer can buy coffee palettes and track authenticity.

##Base - SupplyChain.sol: This class is the interface to call all the functionality.

##Core - Ownable.sol: is the contract that controls ownership and transfer of ownership.

## RESULTS

###Results:
https://rinkeby.etherscan.io/address/0x268e5f751c9a039324c988b8565c77d111b50efa

###Transaction History
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

## Running with Ganache CLI

###Use the command for local testing
sudo ganache-cli -m "panic vapor cigar advance occur protect pipe know merry clock when gown"

###Migrating to rinkeby network
sudo truffle migrate --reset --network rinkeby

## Running front-end
Use the command `npm run dev`
URL - http://localhost:3000/

## Testing using truffle

truffle test

## Compile

truffle compile --reset

## Deploy to the network

truffle migrate --reset --network rinkeby

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

