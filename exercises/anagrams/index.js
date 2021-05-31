// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const charObj1 = sortString(stringA);
    const charObj2 = sortString(stringB);

    function sortString(str) {
        let string = str.replace(/[^\w]/g, "").toLowerCase();
        let object = {};
        for (let char of string) {
            object[char] = object[char] + 1 || 1;
        }
        return object;
    }

    if (Object.keys(charObj1).length !== Object.keys(charObj2).length) {
        return false
    }

    for (let char in charObj1) {
        if (charObj1[char] !== charObj2[char]) {
            return false;
        }
    }
    return true;
}

module.exports = anagrams;
