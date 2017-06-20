/**
 * Created by mincheung on 18/06/2017.
 */
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

// Only change code below this line

var secondTree = myPlants[1].list;
console.log(secondTree); // [ 'fir', 'pine', 'birch' ]

var secondTree = myPlants[1].list[1];
console.log(secondTree);  // pine
