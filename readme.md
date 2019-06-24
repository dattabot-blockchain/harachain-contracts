# Contracts on HARA chain

## Description
This repository includes all contracts that deploy on HARA private network (HARA chain).

## Contracts Definition

### [IBuyable Interface](contracts/interfaces/IBuyable.sol)
Interface for buyable item.

### [IBuyMechanism Interface](contracts/interfaces/IBuyMechanism.sol)
Interface that needs for buy mechanism.

### [IDataFactory Interface](contracts/interfaces/IDataFactory.sol)
Interface for Data Factory Contract.

### [IDataProvider Interface](contracts/interfaces/IDataProvider.sol)
Interface for Data Provider Contract.

### [IPriceable Interface](contracts/interfaces/IPriceable.sol)
Interface for priceable item.

### [IWithdrawable Interface](contracts/interfaces/IWithdrawable.sol)
Interface for withdrawable contract.

### [AdvancedPrice Contract](contracts/AdvancedPrice.sol)
Contract for advanced price. Exchange rate use case. Price will change based on exchange rate.

### [BasicMarketItem Contract](contracts/BasicMarketItem.sol)
Basic contract for item on data exchange market.

### [DataFactory Contract](contracts/DataFactory.sol)
Contract that will create data contract.

### [DataFactoryRegistry Contrat](contracts/DataFactoryRegistry.sol)
Registry contract for Data Factory contract.

### [DataProviderHara Contract](contracts/DataProviderHara.sol)
Data Provider Contract specific for Hara Data Provider.

### [DataFactoryRegistry Contract](contracts/DataProviderRegistry.sol)
Registry contract for Data Provider contract.

### [DataStore Contract](contracts/DataStore.sol)
Contract that store all data information for each data. This contract is created by sending `storeData` transaction at DataFactoryRegistry Contract.

### [HaraTokenPrivate Contract](contracts/HaraTokenPrivate.sol)
Contract oh ERC20 HaraToken on HARA chain network.

### [Order Contract](contracts/Order.sol)
Contract to that allow user to buy multiple data in one transaction.