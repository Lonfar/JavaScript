// Write a function initials(name) that accepts 
// a full name as an arg. 
// The function should return the initials for that name.

// 1. convert to an array, interate each name
// 2. slice the first letter
// 3. return fist letter.

let initials = function(name) {
    let arr = name.split(" ");
    let ini = [];
    for (i = 0; i < arr.length; i++) {
        let word = arr[i];
        let first = word[0].toUpperCase()
        ini.push(first);
    }
    return ini.join('');
}



console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'