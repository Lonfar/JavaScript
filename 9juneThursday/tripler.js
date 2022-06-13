// Write a function tripler(nums) that takes in an array as an arg. 
// The function should return a new array containing three times every number of the original array.

let tripler = function(nums) {
     /*1. interate each number 2. multiply 3  3. push new number to newarr */
    let newArr = [];
    for (i=0; i<nums.length; i++) {
        let number = nums[i];
        let newNum = number * 3;
        newArr.push(newNum);
    }
   
    return newArr;
}



console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]