// Write a function alternatingWords that accepts an array 
// of words as an argument. The function should mutate 
// the input array such that the words alternate between 
// fully uppercase or lowercase. 
// The first word should be uppercase.
let alternatingWords = function (arr) {
    var word = new Array();
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            word.push(arr[i].toUpperCase());
        }
        else {
            word.push(arr[i].toLowerCase());
        }
    }
    return word;
}

let words1 = ['Belka', 'STRELKA', 'laika', 'DEZIK', 'Tsygan'];
console.log(alternatingWords(words1)); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]

let words2 = ['Yellowstone', 'Yosemite', 'Zion', 'Acadia'];
console.log(alternatingWords(words2)); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]