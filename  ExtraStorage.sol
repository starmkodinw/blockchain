// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./SimpleContract.sol";

contract ExtraStorage is SimpleContract {

    function store(int _number) public override  {
        number = _number + 10;
    }
}