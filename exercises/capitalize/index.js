// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let arr = str.split('');
    console.log(arr);
    let newStr = '';
    for (let i = 0; i < arr.length; i ++) {
        if (i === 0 || arr[i-1] === ' ' ) {
            newStr += arr[i].toUpperCase()
        } else {
            newStr += arr[i];
        }
    }
    return newStr;
}

module.exports = capitalize;
