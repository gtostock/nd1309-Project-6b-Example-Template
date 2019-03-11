# Blockchain Nanodegree - Supply Chain

This project contains a smart contract written in Solidity to run a supply chain. This smart contract includes a front end to interact with the supply chain and it's deployed [in this link](https://urkopineda.gitlab.io/bcnd-supply-chain) using GitLab Pages.

## RESULTS

Results:
- Wallet address `0xeC7a8c3815F30548B2F401EaCD3A3e0835507EbC`
- Transaction hash for the contract creation: `0xcddd8ad032a7897a36b4b6add0c4875456e9177656f11d59e45761bdd7b69780`
- Contract address: `0x1E152103069d6B766e6708343facF1ad90F6635C`

Transaction history:
- Harvested - `0x58443a3f38d94ad34ed3b6ffee4026b13f0e415f0e57d06f0cb596bc34b15c17`
- Processed - `0x7a15a3feecba03d91871217b1317456424ad0d983c9c6336ec41da143fb3ba9f`
- Packed - `0xbcab6d6d486066696d99522380861e5b687ad58862153820dc4c757be752f497`
- ForSale - `0xc86b2b3c73f864b0d779c151fe5d2c2df14dfc9b8795520536ab05b0a598b706`
- Sold - `0x48b1170c8e10a0be97dbece73d0811a6f80f677b34a18d1f7b603d47163c762a`
- Shipped - `0xd160f10df72f56b1cc681bb4323a026930e0fe2be33533412e7b4d1da59793a5`
- Received - `0x32e8837eba67af0997270357ae63cfd1cc2dfb39a596863cff0dcffa3e13e26c`
- Purchased - `0x283bafe13859826fe87ada17481953a3c96241217bfe0873128b11243ebe6bb5`

## Running with Ganache CLI
Use the command `ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"`

## Running front-end
Use the command `npm run dev`

## Testing

Use the command `truffle test`, you will need to deploy a local network using, for example, Ganache.

## Compile

To compile the smart contract, use `truffle compile`

## Deploy to the network

Deploy the contract using `truffle migrate --network rinkeby`
