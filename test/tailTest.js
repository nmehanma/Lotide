// Tests for Tail;

const tail = require('../tail');
const assertEqual = require('../assertEqual')

const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs")
assertEqual(result[2], undefined)