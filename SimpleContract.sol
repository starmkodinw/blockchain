// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract SimpleContract {
    int public number;

    User[] public users;
    mapping(string => string) public usersMap;

    struct User {
        string name;
    }

    function store(int _number) public virtual {
        number = _number;
    }

    function getValue() public view returns (int) {
        return number;
    }

    function addUser(string memory _name) public {
        User memory newUser = User({ name: _name});
        users.push(newUser);
        usersMap[_name] = _name;
    }
}