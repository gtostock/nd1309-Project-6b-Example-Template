// This script is designed to test the solidity smart contract - SuppyChain.sol -- and the various functions within
// Declare a variable and assign the compiled smart contract artifact
var SupplyChain = artifacts.require('SupplyChain')
var ConsumerRole = artifacts.require('ConsumerRole')
var DistributorRole = artifacts.require('DistributorRole')
var FarmerRole = artifacts.require('FarmerRole')
var RetailerRole = artifacts.require('RetailerRole')



contract('ConsumerRole', (accounts) => {
    const account = accounts[4]
    
    console.log('Consumer Account --'+account)

    it('Testing consumer role add consumer', async () => {
        const consumerRole = await ConsumerRole.deployed()

        // Declare and Initialize a letiable for event
        let eventEmitted = false
        
        // Watch the emitted event Harvested()
        const event = consumerRole.ConsumerAdded()
        await event.watch(() => {
            eventEmitted = true
        })
        // consumerRole.ConsumerAdded(function (err, result) {
        //     if (!err) {
        //         eventEmitted = true
        //         assert.equal(eventEmitted, true, 'Invalid event emitted')
        //     }
        //   });
          
        // Add account as consumer
        await consumerRole.addConsumer(account)

        // Verify that the account is a consumer
        assert.equal(await consumerRole.isConsumer(account), true, 'Account is not a consumer')
        assert.equal(eventEmitted, true, 'Invalid event emitted')
    })

    it('Testing consumer role renounce consumer', async () => {
        const consumerRole = await ConsumerRole.deployed()

        // Declare and Initialize a letiable for event
        let eventEmitted = false
        
        // Watch the emitted event Harvested()
        const event = consumerRole.ConsumerRemoved()
        await event.watch(() => {
            eventEmitted = true
        })
        // consumerRole.ConsumerRemoved(function (err, result) {
        //     if (!err) {
        //         eventEmitted = true
        //         assert.equal(eventEmitted, true, 'Invalid event emitted')
        //     }
        //   });

        // Add account as consumer
        await consumerRole.renounceConsumer({
            from: account
        })

        // Verify that the account is a consumer
        assert.equal(await consumerRole.isConsumer(account), false, 'Account is a consumer')
        assert.equal(eventEmitted, true, 'Invalid event emitted')
    })
})

contract('DistributorRole', (accounts) => {
    const account = accounts[2]
    console.log('Distributer Account --'+account)
    it('Testing distributor role add distributor', async () => {
        const distributorRole = await DistributorRole.deployed()

        // Declare and Initialize a letiable for event
        let eventEmitted = false
        
        //Watch the emitted event Harvested()
        const event = distributorRole.DistributorAdded()
        await event.watch(() => {
            eventEmitted = true
        })
        // distributorRole.DistributorAdded(function (err, result) {
        //     if (!err) {
        //         eventEmitted = false
        //     }else{
        //         eventEmitted = true
        //     }
        //     assert.equal(eventEmitted, true, 'Invalid event emitted')
        //   });

        // Add account as distributor
        await distributorRole.addDistributor(account)

        // Verify that the account is a distributor
        assert.equal(await distributorRole.isDistributor(account), true, 'Account is not a distributor')
        assert.equal(eventEmitted, true, 'Invalid event emitted')
    })

    it('Testing distributor role renounce distributor', async () => {
        const distributorRole = await DistributorRole.deployed()

        // Declare and Initialize a letiable for event
        let eventEmitted = false
        
        // Watch the emitted event Harvested()
        const event = distributorRole.DistributorRemoved()
        await event.watch(() => {
            eventEmitted = true
        })
        // distributorRole.DistributorRemoved(function (err, result) {
        //     if (err) {
        //         eventEmitted = false
        //     }else{
        //         eventEmitted = true
        //     }
        //     assert.equal(eventEmitted, true, 'Invalid event emitted')
        //   });

        // Add account as distributor
        await distributorRole.renounceDistributor({
            from: account
        })

        // Verify that the account is a distributor
        assert.equal(await distributorRole.isDistributor(account), false, 'Account is a distributor')
        assert.equal(eventEmitted, true, 'Invalid event emitted')
    })
})

contract('FarmerRole', (accounts) => {
    const account = accounts[1]
    console.log('Farmer Account --'+account)
    it('Testing farmer role add farmer', async () => {
        const farmerRole = await FarmerRole.deployed()

        // Declare and Initialize a letiable for event
        let eventEmitted = false
        
        // Watch the emitted event Harvested()
        const event = farmerRole.FarmerAdded()
        await event.watch(() => {
            eventEmitted = true
        })
        // farmerRole.FarmerAdded(function (err, result) {
        //     if (err) {
        //         eventEmitted = false
        //     }else{
        //         eventEmitted = true
        //     }

        //     assert.equal(eventEmitted, true, 'Invalid event emitted')
        //   });

        // Add account as farmer
        await farmerRole.addFarmer(account)

        // Verify that the account is a farmer
        assert.equal(await farmerRole.isFarmer(account), true, 'Account is not a farmer')
        assert.equal(eventEmitted, true, 'Invalid event emitted')
    })

    it('Testing farmer role renounce farmer', async () => {
        const farmerRole = await FarmerRole.deployed()

        // Declare and Initialize a letiable for event
        let eventEmitted = false
        
        // Watch the emitted event Harvested()
        const event = farmerRole.FarmerRemoved()
        await event.watch(() => {
            eventEmitted = true
        })
        // farmerRole.FarmerRemoved(function (err, result) {
        //     if (err) {
        //         eventEmitted = false
        //     }else{
        //         eventEmitted = true
        //     }
        //     assert.equal(eventEmitted, true, 'Invalid event emitted')
        //   });

        // Add account as farmer
        await farmerRole.renounceFarmer({
            from: account
        })

        // Verify that the account is a farmer
        assert.equal(await farmerRole.isFarmer(account), false, 'Account is a farmer')
        assert.equal(eventEmitted, true, 'Invalid event emitted')
    })
})

contract('RetailerRole', (accounts) => {
    const account = accounts[3]
    console.log('Retailer Account --'+account)
    it('Testing retailer role add retailer', async () => {
        const retailerRole = await RetailerRole.deployed()

        // Declare and Initialize a letiable for event
        let eventEmitted = false
        
        // Watch the emitted event Harvested()
        const event = retailerRole.RetailerAdded()
        await event.watch(() => {
            eventEmitted = true
        })
        // retailerRole.RetailerAdded(function (err, result) {
        //     if (err) {
        //         eventEmitted = false
        //     }else{
        //         eventEmitted = true
        //     }
        //     assert.equal(eventEmitted, true, 'Invalid event emitted')
        //   });

        // Add account as retailer
        await retailerRole.addRetailer(account)

        // Verify that the account is a retailer
        assert.equal(await retailerRole.isRetailer(account), true, 'Account is not a retailer')
        assert.equal(eventEmitted, true, 'Invalid event emitted')
    })

    it('Testing retailer role renounce retailer', async () => {
        const retailerRole = await RetailerRole.deployed()

        // Declare and Initialize a letiable for event
        let eventEmitted = false
        
        // Watch the emitted event Harvested()
        const event = retailerRole.RetailerRemoved()
        await event.watch(() => {
            eventEmitted = true
        })
        // retailerRole.RetailerRemoved(function (err, result) {
        //     if (err) {
        //         eventEmitted = false
        //     }else{
        //         eventEmitted = true
        //     }

        //     assert.equal(eventEmitted, true, 'Invalid event emitted')
        //   });

        // Add account as retailer
        await retailerRole.renounceRetailer({
            from: account
        })

        // Verify that the account is a retailer
        assert.equal(await retailerRole.isRetailer(account), false, 'Account is a retailer')
        assert.equal(eventEmitted, true, 'Invalid event emitted')
    })
})

contract('SupplyChain', function(accounts) {
    // Declare few constants and assign a few sample accounts generated by ganache-cli
    const sku = 1
    const upc = 1
    const originFarmerID = accounts[1]
    const originFarmName = 'No Name'
    const originFarmInformation = 'Somewhere'
    const originFarmLatitude = '-38.239770'
    const originFarmLongitude = '144.341490'
    const productID = sku + upc
    const productNotes = 'Coffee'
    //const productPrice = web3.toWei(0.01, 'wei')
    const productPrice = web3.toWei(1, 'ether')
    let itemState = 0
    const ownerID = accounts[0]
    const farmerID = accounts[1]
    const distributorID = accounts[2]
    const retailerID = accounts[3]
    const consumerID = accounts[4]

    console.log('ganache-cli accounts used here...')
    console.log('Contract Owner: accounts[0] ', ownerID)
    console.log('Farmer: accounts[1] ', farmerID)
    console.log('Distributor: accounts[2] ', distributorID)
    console.log('Retailer: accounts[3] ', retailerID)
    console.log('Consumer: accounts[4] ', consumerID)

    // 1st Test
    it('Testing smart contract function harvestItem() that allows a farmer to harvest coffee', async () => {
        const supplyChain = await SupplyChain.deployed()

        // // Add account as farmer
        // console.log("Adding Farmer -- "+farmerID)
        await supplyChain.addFarmer(farmerID)
        assert.equal(await supplyChain.isFarmer(farmerID), true, 'Account is not a farmer')
        
        // Declare and Initialize a letiable for event
        let eventEmitted = false
        
        // Watch the emitted event Harvested()
        let event = supplyChain.Harvested()
        await event.watch(() => {
            eventEmitted = true
        })
        // supplyChain.Harvested(function (err, result) {
        //     if (err) {
        //         eventEmitted = false
        //     }else{
        //         eventEmitted = true
        //     }

        //     assert.equal(eventEmitted, true, 'Invalid event emitted')
        //   });

        // Mark an item as Harvested by calling function harvestItem()
        await supplyChain.harvestItem(upc, originFarmerID, originFarmName, originFarmInformation, originFarmLatitude, originFarmLongitude, productNotes, {
            from: farmerID
        })

        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        const resultBufferOne = await supplyChain.fetchItemBufferOne.call(upc)
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo.call(upc)

        // Verify the result set
        assert.equal(resultBufferOne[0], sku, 'Error: Invalid item SKU')
        assert.equal(resultBufferOne[1], upc, 'Error: Invalid item UPC')
        assert.equal(resultBufferOne[2], farmerID, 'Error: Missing or Invalid ownerID')
        assert.equal(resultBufferOne[3], originFarmerID, 'Error: Missing or Invalid originFarmerID')
        assert.equal(resultBufferOne[4], originFarmName, 'Error: Missing or Invalid originFarmName')
        assert.equal(resultBufferOne[5], originFarmInformation, 'Error: Missing or Invalid originFarmInformation')
        assert.equal(resultBufferOne[6], originFarmLatitude, 'Error: Missing or Invalid originFarmLatitude')
        assert.equal(resultBufferOne[7], originFarmLongitude, 'Error: Missing or Invalid originFarmLongitude')
        assert.equal(resultBufferTwo[2], productID, 'Error: Invalid item productID')
        assert.equal(resultBufferTwo[5], itemState, 'Error: Invalid item State')
        assert.equal(eventEmitted, true, 'Invalid event emitted')
    })

    // 2nd Test
    it('Testing smart contract function processItem() that allows a farmer to process coffee', async () => {
        const supplyChain = await SupplyChain.deployed()
        
        // Declare and Initialize a letiable for event
        let eventEmitted = false
        
        // Watch the emitted event Processed()
        let event = supplyChain.Processed()
        await event.watch(() => {
            eventEmitted = true
        })
        // supplyChain.Processed(function (err, result) {
        //     if (err) {
        //         eventEmitted = false
        //     }else{
        //         eventEmitted = true
        //     }

        //     assert.equal(eventEmitted, true, 'Invalid event emitted')
        //   });

        // Mark an item as Processed by calling function processtItem()
        itemState++
        await supplyChain.processItem(upc, {
            from: farmerID
        })

        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        const resultBufferOne = await supplyChain.fetchItemBufferOne.call(upc)
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo.call(upc)

        // Verify the result set
        assert.equal(resultBufferOne[0], sku, 'Error: Invalid item SKU')
        assert.equal(resultBufferOne[1], upc, 'Error: Invalid item UPC')
        assert.equal(resultBufferTwo[5], itemState, 'Error: Invalid item State')
        assert.equal(eventEmitted, true, 'Invalid event emitted')
    })

    // 3rd Test
    it('Testing smart contract function packItem() that allows a farmer to pack coffee', async () => {
        const supplyChain = await SupplyChain.deployed()
        
        // Declare and Initialize a letiable for event
        let eventEmitted = false
        
        // Watch the emitted event Packed()
        let event = supplyChain.Packed()
        await event.watch(() => {
            eventEmitted = true
        })
        // supplyChain.Processed(function (err, result) {
        //     if (err) {
        //         eventEmitted = false
        //     }else{
        //         eventEmitted = true
        //     }

        //     assert.equal(eventEmitted, true, 'Invalid event emitted')
        //   });

        // Mark an item as Packed by calling function packItem()
        itemState++
        await supplyChain.packItem(upc, {
            from: farmerID
        })

        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        const resultBufferOne = await supplyChain.fetchItemBufferOne.call(upc)
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo.call(upc)

        // Verify the result set
        assert.equal(resultBufferOne[0], sku, 'Error: Invalid item SKU')
        assert.equal(resultBufferOne[1], upc, 'Error: Invalid item UPC')
        assert.equal(resultBufferTwo[5], itemState, 'Error: Invalid item State')
        assert.equal(eventEmitted, true, 'Invalid event emitted')
    })

    // 4th Test
    it('Testing smart contract function sellItem() that allows a farmer to sell coffee', async () => {
        const supplyChain = await SupplyChain.deployed()
        
        // Declare and Initialize a letiable for event
        let eventEmitted = false
        
        // Watch the emitted event ForSale()
        let event = supplyChain.ForSale()
        await event.watch(() => {
            eventEmitted = true
        })
        // supplyChain.ForSale(function (err, result) {
        //     if (err) {
        //         eventEmitted = false
        //     }else{
        //         eventEmitted = true
        //     }

        //     assert.equal(eventEmitted, true, 'Invalid event emitted')
        //   });

        // Mark an item as ForSale by calling function sellItem()
        itemState++
        await supplyChain.sellItem(upc, productPrice, {
            from: farmerID
        })

        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        const resultBufferOne = await supplyChain.fetchItemBufferOne.call(upc)
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo.call(upc)

        // Verify the result set
        assert.equal(resultBufferOne[0], sku, 'Error: Invalid item SKU')
        assert.equal(resultBufferOne[1], upc, 'Error: Invalid item UPC')
        assert.equal(resultBufferTwo[5], itemState, 'Error: Invalid item State')
        assert.equal(resultBufferTwo[4], productPrice, 'Error: Invalid item price')
        assert.equal(eventEmitted, true, 'Invalid event emitted')
    })

    // 5th Test
    it('Testing smart contract function buyItem() that allows a distributor to buy coffee', async () => {
        const supplyChain = await SupplyChain.deployed()
        
        // Add account as distirbutor
        await supplyChain.addDistributor(distributorID)
        assert.equal(await supplyChain.isDistributor(distributorID), true, 'Account is not a distributor')

        // Declare and Initialize a letiable for event
        let eventEmitted = false
        
        // Watch the emitted event Sold()
        let event = supplyChain.Sold()
        await event.watch(() => {
            eventEmitted = true
        })
        // supplyChain.Sold(function (err, result) {
        //     if (err) {
        //         eventEmitted = false
        //     }else{
        //         eventEmitted = true
        //     }

        //     assert.equal(eventEmitted, true, 'Invalid event emitted')
        //   });

        // Mark an item as Sold by calling function buyItem()
        itemState++
        await supplyChain.buyItem(upc, {
            from: distributorID,
            value: productPrice
        })

        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        const resultBufferOne = await supplyChain.fetchItemBufferOne.call(upc)
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo.call(upc)

        // Verify the result set
        assert.equal(resultBufferOne[0], sku, 'Error: Invalid item SKU')
        assert.equal(resultBufferOne[1], upc, 'Error: Invalid item UPC')
        assert.equal(resultBufferOne[2], distributorID, 'Error: Invalid item ownerID')
        assert.equal(resultBufferTwo[6], distributorID, 'Error: Invalid item distributorID')
        assert.equal(resultBufferTwo[5], itemState, 'Error: Invalid item State')
        assert.equal(eventEmitted, true, 'Invalid event emitted')
    })

    // 6th Test
    it('Testing smart contract function shipItem() that allows a distributor to ship coffee', async () => {
        const supplyChain = await SupplyChain.deployed()
        
        // Declare and Initialize a letiable for event
        let eventEmitted = false
        
        // Watch the emitted event Shipped()
        let event = supplyChain.Shipped()
        await event.watch(() => {
            eventEmitted = true
        })
        // supplyChain.Shipped(function (err, result) {
        //     if (err) {
        //         eventEmitted = false
        //     }else{
        //         eventEmitted = true
        //     }

        //     assert.equal(eventEmitted, true, 'Invalid event emitted')
        //   });

        // Mark an item as Sold by calling function buyItem()
        itemState++
        await supplyChain.shipItem(upc, {
            from: distributorID
        })

        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        const resultBufferOne = await supplyChain.fetchItemBufferOne.call(upc)
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo.call(upc)

        // Verify the result set
        assert.equal(resultBufferOne[0], sku, 'Error: Invalid item SKU')
        assert.equal(resultBufferOne[1], upc, 'Error: Invalid item UPC')
        assert.equal(resultBufferTwo[5], itemState, 'Error: Invalid item State')
        assert.equal(eventEmitted, true, 'Invalid event emitted')
    })

    // 7th Test
    it('Testing smart contract function receiveItem() that allows a retailer to mark coffee received', async () => {
        const supplyChain = await SupplyChain.deployed()
        //console.log("Retailer Address -- "+retailerID)
        // Add account as retailer
        await supplyChain.addRetailer(retailerID)
        assert.equal(await supplyChain.isRetailer(retailerID), true, 'Account is not a retailer')

        // Declare and Initialize a letiable for event
        let eventEmitted = false
        
        // Watch the emitted event Received()
        let event = supplyChain.Received()
        await event.watch(() => {
            eventEmitted = true
        })
        // supplyChain.Received(function (err, result) {
        //     if (err) {
        //         eventEmitted = false
        //     }else{
        //         eventEmitted = true
        //     }

        //     assert.equal(eventEmitted, true, 'Invalid event emitted')
        //   });

        // Mark an item as Received by calling function receiveItem()
        itemState++
        await supplyChain.receiveItem(upc, {
            from: retailerID
        })

        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        const resultBufferOne = await supplyChain.fetchItemBufferOne.call(upc)
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo.call(upc)

        // Verify the result set
        assert.equal(resultBufferOne[0], sku, 'Error: Invalid item SKU')
        assert.equal(resultBufferOne[1], upc, 'Error: Invalid item UPC')
        assert.equal(resultBufferOne[2], retailerID, 'Error: Invalid item ownerID')
        assert.equal(resultBufferTwo[7], retailerID, 'Error: Invalid item retailerID')
        assert.equal(resultBufferTwo[5], itemState, 'Error: Invalid item State')
        assert.equal(eventEmitted, true, 'Invalid event emitted')
    })

    // 8th Test
    it('Testing smart contract function purchaseItem() that allows a consumer to purchase coffee', async () => {
        const supplyChain = await SupplyChain.deployed()
        
        // Add account as retailer
        await supplyChain.addConsumer(consumerID)
        assert.equal(await supplyChain.isConsumer(consumerID), true, 'Account is not a consumer')

        // Declare and Initialize a letiable for event
        let eventEmitted = false
        
        // Watch the emitted event Purchased()
        let event = supplyChain.Purchased()
        await event.watch(() => {
            eventEmitted = true
        })
        // supplyChain.Purchased(function (err, result) {
        //     if (err) {
        //         eventEmitted = false
        //     }else{
        //         eventEmitted = true
        //     }
        //     assert.equal(eventEmitted, true, 'Invalid event emitted')
        //   });

        // Mark an item as Purchased by calling function purchaseItem()
        itemState++
        await supplyChain.purchaseItem(upc, {
            from: consumerID
        })

        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        const resultBufferOne = await supplyChain.fetchItemBufferOne.call(upc)
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo.call(upc)

        // Verify the result set
        assert.equal(resultBufferOne[0], sku, 'Error: Invalid item SKU')
        assert.equal(resultBufferOne[1], upc, 'Error: Invalid item UPC')
        assert.equal(resultBufferOne[2], consumerID, 'Error: Invalid item ownerID')
        assert.equal(resultBufferTwo[8], consumerID, 'Error: Invalid item consumerID')
        assert.equal(resultBufferTwo[5], itemState, 'Error: Invalid item State')
        assert.equal(eventEmitted, true, 'Invalid event emitted')
    })

    // 9th Test
    it('Testing smart contract function fetchItemBufferOne() that allows anyone to fetch item details from blockchain', async () => {
        const supplyChain = await SupplyChain.deployed()

        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        const resultBufferOne = await supplyChain.fetchItemBufferOne.call(upc)
        
        // Verify the result set:
        assert.equal(resultBufferOne[0], sku, 'Error: Invalid item SKU')
        assert.equal(resultBufferOne[1], upc, 'Error: Invalid item UPC')
        assert.equal(resultBufferOne[2], consumerID, 'Error: Invalid item ownerID')
        assert.equal(resultBufferOne[3], originFarmerID, 'Error: Invalid item originFarmerID')
        assert.equal(resultBufferOne[4], originFarmName, 'Error: Invalid item originFarmName')
        assert.equal(resultBufferOne[5], originFarmInformation, 'Error: Invalid item originFarmInformation')
        assert.equal(resultBufferOne[6], originFarmLatitude, 'Error: Invalid item originFarmLatitude')
        assert.equal(resultBufferOne[7], originFarmLongitude, 'Error: Invalid item originFarmLongitude')
    })

    // 10th Test
    it('Testing smart contract function fetchItemBufferTwo() that allows anyone to fetch item details from blockchain', async () => {
        const supplyChain = await SupplyChain.deployed()

        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo.call(upc)
        
        // Verify the result set:
        assert.equal(resultBufferTwo[0], sku, 'Error: Invalid item SKU')
        assert.equal(resultBufferTwo[1], upc, 'Error: Invalid item UPC')
        assert.equal(resultBufferTwo[2], productID, 'Error: Invalid item productID')
        assert.equal(resultBufferTwo[3], productNotes, 'Error: Invalid item productNotes')
        assert.equal(resultBufferTwo[4], productPrice, 'Error: Invalid item productPrice')
        assert.equal(resultBufferTwo[5], itemState, 'Error: Invalid item itemState')
        assert.equal(resultBufferTwo[6], distributorID, 'Error: Invalid item distributorID')
        assert.equal(resultBufferTwo[7], retailerID, 'Error: Invalid item retailerID')
        assert.equal(resultBufferTwo[8], consumerID, 'Error: Invalid item consumerID')
    })

});
