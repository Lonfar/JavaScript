// Write a function abbreviate(word) that takes 
// in a string arg. The function should return 
// a new string where all of its vowels are removed.

let abbreviate = function(word) {
    let newWord = "";
    let vowel = "aeiouAEIOU";

    for (i = 0; i < word.length; i++) {
        let char = word[i];
        if (!vowel.includes(char)) {
            newWord += char;
        }
    }
    return newWord;
}

console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'