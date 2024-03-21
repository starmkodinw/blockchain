// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "./SimpleContract.sol";

contract Storage {
    SimpleContract[] public simpleContractArray;

    function createStorage() public {
        SimpleContract simpleContract = new SimpleContract();
        simpleContractArray.push(simpleContract);
    }

    function store(uint256 index, int number) public {
        return simpleContractArray[index].store(number);
    }

    function get(uint256 index) public view returns (int) {
        return simpleContractArray[index].getValue();
    }
}