// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // return str.split('').reduce((reversed, character) => character + reversed, '');

    const strArr = str.split('');
    let reversedString = [];
    for (let i = strArr.length-1; i >= 0 ; i--) {
        reversedString.push(strArr[i]);
        debugger;
    }
    return reversedString.join('');
}

reverse('asdf');

module.exports = reverse;
