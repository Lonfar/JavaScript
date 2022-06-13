// Write a function choosePrimes(nums) that 
// takes in an array of numbers as args. 
// The function should return a new array containing 
// the primes from the original array. 
// A prime number is a number that is only divisible 
// by 1 and itself. Hint: consider creating a helper 
// function to check if a number is prime!
let isPrime = function (number) {
    if (number < 2) {
      return false;
    }
  
    let i = 2;
    while (i < number) {
      if (number % i === 0) {
        return false;
      }
      i++;
    }
  
    return true;
  }

let choosePrimes = function(array) {
    let prime = [];
    for (i = 0; i < array.length; i++) {
        let num = array[i];
        if (isPrime(num)) {
            prime.push(num);
        }
    }
    return prime;
}

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]