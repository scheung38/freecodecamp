// https://forum.freecodecamp.com/t/freecodecamp-algorithm-challenge-guide-wherefore-art-thou/16092

// Make a function that looks through an array of objects (first argument) and returns an array
// of all objects that have matching property and value pairs (second argument). Each property
// and value pair of the source object has to be present in the object from the collection if
// it is to be included in the returned array.

function whatIsInAName(collection, source) {
    // "What's in a name? that which we call a rose
    // By any other name would smell as sweet.”
    // -- by William Shakespeare, Romeo and Juliet
    var srcKeys = Object.keys(source); // last

    // filter the collection
    return collection.filter(function (obj) {
        return srcKeys
            .map(function (key) {
                return obj.hasOwnProperty(key) && obj[key] === source[key];
            })
            .reduce(function (a, b) {
                return a && b;
            });
    });
}

// test here
console.log(whatIsInAName(
    [{first: "Romeo", last: "Montague"},
        {first: "Mercutio", last: null},
        {first: "Tybalt", last: "Capulet"}],
    {last: "Capulet"}));
// [ { first: 'Tybalt', last: 'Capulet' } ]

// Code Explanation:
//
//     We start by filtering through collection using Array.filter().
//     Next, we map through all keys and return Boolean values based on the check conditions: both the key
//     and its corresponding value must exist within the object we are filtering through.
//     Then we reduce the mapped Boolean values to a single Boolean that indicates whether all srcKeys
//     pass the conditions checked above.
//     This single Boolean will be used to filter through the collection.


