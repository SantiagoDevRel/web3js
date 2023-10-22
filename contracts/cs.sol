// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract cs {
    string private s_message;

    constructor(string memory _cs ){
        s_message = _cs;
    }

    function setMessage(string memory _message) public {
        s_message = _message;
    }

    function getMessage() public view returns(string memory){
        return s_message;
    }

}
