// Write a function uncompress(str) that takes 
// in a "compressed" string as an arg. 
// A compressed string consists of a character immediately 
// followed by the number of times it appears 
// in the "uncompressed" form. The function should return 
// the uncompressed version of the string. See the examples. 

// Hint: you can use the built-in Number function 
// should convert a numeric string into the number type. 
// For example. Number("4") // => 4

// 1.set new str 2. interate 3. if letter is letter push
// 4.if letter is number repeat(i - 1) 5. return new str
let uncompress = function (str) {
    let newStr = "";
    for (i = 0; i < str.length; i++) {
        if (str[i] >= "a" && str[i] <= "z") {
            newStr += str[i];
        }
        else if (str[i] >= "0" && str[i] <= "9") {
            for (j = 0; j < Number(str[i]) - 1; j++) {
                newStr += str[i - 1];
            }
        }
    }
    return newStr;
}
console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'