pragma solidity ^0.4.25;

import "./interfaces/IPriceable.sol";
import "./../open-zeppelin/ownership/Ownable.sol";


/**
 * @title AdvancedPrice
 * @dev [WIP] Example contract of advanced pricing. Waiting the requirement.
 */
contract AdvancedPrice is IPriceable, Ownable {
    // storage
    mapping(string=>uint256) price;
    address dataAddress;
    
    // events
    event PriceAddressChangedLog(address by, address oldAddress, address newAddress);

    //modifier
    modifier onlyData() {
        require(msg.sender == dataAddress, "Can only be acessed by data contract address");
        _;
    }

    constructor(address _dataAddress)
    public {
        dataAddress = _dataAddress;
    }
    
    /**
    * @dev Function to set price of specific price Id. Only owner of item can call this function.
    * @param _id Price id of item.
    * @param _value Value of item.
    */
    function setPrice(string _id, uint256 _value) external onlyData {
        price[_id] = _value;
    }

    /**
    * @dev Function to get price of specific price Id.
    * @param _id Price id of item.
    * @return Uint256 of price.
    */
    function getPrice(string _id) external view  returns (uint256 idPrice) {        
        idPrice = this.getPrice(_id, msg.sender);
    }

    /**
    * @dev Function to get price of specific price Id.
    * @param _id Price id of item.
    * @param _data Address.
    * @return Uint256 of price.
    */
    function getPrice(string _id, address _data) public view  returns (uint256 idPrice) {
        idPrice = price[_id];
    }

    /**
    * @dev function to destroy contract
    */
    function kill() 
    public
    onlyOwner {
        selfdestruct(owner());
    }
}