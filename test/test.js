/**
 * Created by mincheung on 17/06/2017.
 */

// Need to execute on CLI: npm test

var mocha = require('mocha');
var describe = mocha.describe;
var it = mocha.it;
var assert = require('chai').assert;

var {palindrome, test} = require("../2_BasicAlgorithmScripting/palindrome.js");
var {findLongestWord} = require("../2_BasicAlgorithmScripting/findLongestWord.js");
var { cc, count} = require("../1_BasicJavascript/CountingCards.js");

describe("freecodecamp", function () {
    describe('palindrome test', function () {
        it("checks to see palindrome of eye is true", function () {
            assert.equal(true, palindrome("eye"));
        }),
            it("checks to see palindrome of _eye is true", function () {
                assert.equal(true, palindrome("_eye"));
            }),
            it("checks to see palindrome of race car is true", function () {
                assert.equal(true, palindrome("race car"));
            }),
            it("checks to see palindrome of not a palindrome is true", function () {
                assert.equal(false, palindrome("not a palindrome"));
            })
    })
});

describe('findLongestWord', function () {
    describe('findLongestWord Description', function () {
        it("checks using sentence quick brown", function () {
            assert.equal(6, findLongestWord("The quick brown fox jumped over the lazy dog"));
        }),
            it("checks using May the force be with you", function () {
                assert.equal(5, findLongestWord("May the force be with you"));
            })


    })

});


describe('CountingCards', function () {
    describe('CountingCards Description', function () {
        it("checks using 2,3,4,5,6", function () {
            assert.equal("5 Bet", cc(2,3,4,5,6));
        }),
            it("checks using 7,8,9", function () {
                assert.equal("0 Hold", cc(7,8,9));
            })
    })
});