// Write a function rotate(array, num) that takes in an array 
// and a number as args. When the num is positive, 
// the elements of the array should be rotated to the right. 
// When the num is negative, the elements of the array should 
// be rotated to the left. The function should mutate the original array. 

// Define this function using function expression syntax.
let rotate = function (array, num) {
    if (num > 0) {
        for (i = 0; i < num; i++) {
            let temp = array[array.length - 1];
            for (j = array.length - 1; j > 0; j--) {
                array[j] = array[j - 1];
            }
            array[0] = temp;
        }
    }
    else if (num < 0) {
        for (i = 0; i < Math.abs(num); i++) {
            let temp = array[0];
            for (j = 0; j < array.length - 1; j++) {
                array[j] = array[j + 1];
            }
            array[array.length - 1] = temp;
        }
    }
}

let arr = ['a', 'b', 'c', 'd', 'e'];
rotate(arr, 2);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotate(animals, -1);
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]