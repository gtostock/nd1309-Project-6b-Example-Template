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

Results:
https://rinkeby.etherscan.io/address/0x3ead5e07737037ca164975df271985558ab260f9

Transaction history:
- Harvested - 0xd58b6dd45984903049093aaaac399a863142c2cbbc1dd3a967b3a65cef4ec02d
- Processed - 0x23677b64c75f2162ea8a33007fad10fd463f83a63fb7a346e9fea50d52978510
- Packed - 0xf4cd362dfa7739a9f778aef03b5c1fcbcc17ef85e01085830038e0e5cebd8e5d
- ForSale - 0x71aab05df40655eea9b32ca9fe60b186550a4182e09bedf1cc9d31b3667fc525

## Running with Ganache CLI
Use the command `sudo ganache-cli -m "panic vapor cigar advance occur protect pipe know merry clock when gown"`

## Running front-end
Use the command `npm run dev`

## Testing using truffle

truffle test

## Compile

truffle compile --reset

## Deploy to the network

truffle migrate --reset --network rinkeby