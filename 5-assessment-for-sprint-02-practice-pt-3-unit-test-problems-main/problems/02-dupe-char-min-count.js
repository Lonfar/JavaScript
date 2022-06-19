/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

function countCharacters(string) {
	// Your code here
	let json = {};
	for (let i in string) {
		let char = string[i];
		if (!json[char]) {
			json[char] = 1
		} else {
			json[char]++;
		}
	}
	return json
}

function duplicateCharMinCount(string, minCount) {
	// Your code here
	let arr = [];
	const obj = countCharacters(string);
	for (let char in obj) {
		if (obj[char] >= minCount) {
			arr.push(char);
		}
	}
	return arr;
}

console.log(duplicateCharMinCount("apple", 2))
console.log(duplicateCharMinCount("banana", 2))
console.log(duplicateCharMinCount("What about a longer string?", 3))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
// module.exports = duplicateCharMinCount;
