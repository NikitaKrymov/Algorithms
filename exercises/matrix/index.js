// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let arr = [];
    for (let i = 0; i < n; i++){
        arr.push([]);
    }
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    let number = 1;

    while (startColumn <= endColumn && startRow <= endRow) {
        //iterate through top row
        for (let i = startColumn; i <= endColumn; i++) {
            arr[startRow][i] = number;
            number++;
        }
        startRow++
        //iterate through right column
        for (let i = startRow; i <= endRow; i++) {
            arr[i][endColumn] = number;
            number++;
        }
        endColumn--
        //iterate through bot row
        for (let i = endColumn; i >= startColumn; i--) {
            arr[endRow][i] = number;
            number++;
        }
        endRow--
        //iterate through left column
        for (let i = endRow; i >= startRow; i--) {
            arr[i][startColumn] = number;
            number++
        }
        startColumn++
    }

    
    return arr;

}

module.exports = matrix;
