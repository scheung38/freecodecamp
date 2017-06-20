/**
 * Created by mincheung on 18/06/2017.
 */

// We have an array of objects representing different people in our contacts lists.
// A lookUpProfile function that takes firstName and a property (prop) as arguments has been pre-written for you.
// The function should check if firstName is an actual contact's firstName and the given property (prop) is
// a property of that contact.

// If both are true, then return the "value" of that property.
// If firstName does not correspond to any contacts then return "No such contact"
// If prop does not correspond to any valid properties then return "No such property"

// Setup

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


// https://forum.freecodecamp.com/t/freecodecamp-challenge-guide-profile-lookup/18259/2


function lookUpProfile(firstName, prop) {
    var result = contacts.filter(x => x.firstName == firstName);

    console.log('filtered output : ', result);

    if (result.length === 0) {
        return "No such contact";
    } else {
        return result[0][prop] ? result[0][prop] : "No such property";
    }
}
console.log(lookUpProfile("Kristian", "lastName")); // should be "Vos"
console.log(lookUpProfile("Sherlock", "likes")); // should be  [ 'Intriguing Cases', 'Violin' ]
console.log(lookUpProfile("Harry", "likes")); // should be "[ 'Hogwarts', 'Magic', 'Hagrid' ]
console.log(lookUpProfile("Bob", "number")); // should be No such contact
console.log(lookUpProfile("Akira", "address")); // should be No such property

// console.log(contacts[0]['firstName']); // Akira
// console.log(contacts[0]['lastName']); // Laine
// console.log(contacts[0]['likes']); // [ 'Pizza', 'Coding', 'Brownie Points'

// console.log(contacts.length);
// console.log(contacts[0].hasOwnProperty('firstName')); // true
// console.log(contacts[0].hasOwnProperty('address')); // false


// function lookUpProfile2(firstName, prop) {
//     let contact = contacts.find((x) => x.firstName === firstName);
//     console.log('loopUpProile2.contact is :', contact);
//
//     return contact ? contact.hasOwnProperty(prop) ? contact[prop] : "No such property";
// }
//
// console.log(lookUpProfile2("Kristian", "lastName")); // should be "Vos"
// console.log(lookUpProfile2("Sherlock", "likes")); // should be  [ 'Intriguing Cases', 'Violin' ]
// console.log(lookUpProfile2("Harry", "likes")); // should be "[ 'Hogwarts', 'Magic', 'Hagrid' ]
// console.log(lookUpProfile2("Bob", "number")); // should be No such contact
// console.log(lookUpProfile2("Akira", "address")); // should be No such property