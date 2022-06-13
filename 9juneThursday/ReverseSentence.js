// Write a function reverseSentence(sentence) that takes in a sentence as an arg. 
// The function should return a new sentence where the order of the words is reversed. 
// Note that you should reverse the order among words, not the order among characters.

// 1. convert the string to an array
// 2. pop unshift?
// 3. convert back

let reverseSentence = function(sentence) {
    let arr = sentence.split(" ");
    let rearr = arr.reverse();
    let newsen = rearr.join(" ");
    return newsen;
}



console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'