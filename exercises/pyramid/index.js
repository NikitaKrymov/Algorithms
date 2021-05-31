// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const array = new Array(n*2-1).fill(' ');

    for(let i = 0; i < n; i++) {
        array.splice((array.length/2 - i), 1, '#');
        array.splice((array.length/2 + i), 1, '#');
        console.log(array.join(''));
    }
}

module.exports = pyramid;
