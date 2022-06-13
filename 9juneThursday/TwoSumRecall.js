// Write a function twoSum(arr, target) that accepts an array and a target number as args. 
// The function should a return a boolean indicating if two distinct numbers of the array add up to the target value. 
// You can assume that input array contains only unique numbers.

// 1.interate each number
// 2.pair up two numbers
// 3. add two numbers
// 4. if result of addition === target
// 5 return true
// 6. if not return false

let twoSum = function(arr, target) {
    for(i=0; i<arr.length; i++) {
        let num = arr[i];
        for(j=i+1; j<arr.length; j++) {
            let num2 = arr[j];
            let sum = num + num2;
            if(sum === target) {
                return true;
            
            }
           
        } 
     
    }
    return false;
}

console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false