'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

function buildLimitsMatrix (width, height) {
  const MAX = new Array(width)
  const MIN = new Array(width)
  for (let x=0; x<width; x++) {
    for (let y=0; y<height; y++) {
      if (!MIN[x]) MIN[x] = new Array(height)
      const layer = Math.min(x,y)
      if (MIN[x][y] === undefined) {
        MIN[x][y] = layer
        if (x+y<width) {
          const mirrorX = height - 1 - y
          const mirrorY = width - 1 - x
          if (!MIN[mirrorX]) MIN[mirrorX] = new Array(height)
          if (MIN[mirrorX][mirrorY] === undefined) MIN[mirrorX][mirrorY] = layer
        }
      }
    }
  }
  for (let x=0; x<width; x++) {
    for (let y=0; y<height; y++) {
      if (!MAX[x]) MAX[x] = new Array(height)
      MAX[x][y] = width - MIN[x][y] - 1
    }
  }
  return {
    MIN,
    MAX
  }
}

function getNewIndex ({ x, y, r, MIN, MAX }) {
  let newX = x
  let newY = y
  let offset = r
  while(offset > 0) {
    offset--
  }
  console.log(`For (${x},${y}) => (${newX},${newY})`)
  return [newX, newY]
}

function printMatrix (matrix) {
  for(let i = 0; i<matrix.length; i++) {
    console.log(`${matrix[i].join(' ')}`)
  }
}

// Complete the matrixRotation function below.
function matrixRotation(matrix, r) {
  const result = []
  const width = matrix.length
  const height = matrix[0].length
  const { MIN, MAX } = buildLimitsMatrix(width, height)
  for (let x = 0; x<width; x++) {
    for(let y = 0; y<height; y++) {
      const [newX, newY] = getNewIndex({ x, y, r, MIN, MAX })
      if (!result[newX]) result[newX] = new Array(height)
      result[newX][newY] = matrix[x][y]
    }
  }
  printMatrix(result)
}

// function main() {
//     const mnr = readLine().replace(/\s+$/g, '').split(' ');

//     const m = parseInt(mnr[0], 10);

//     const n = parseInt(mnr[1], 10);

//     const r = parseInt(mnr[2], 10);

//     let matrix = Array(m);

//     for (let i = 0; i < m; i++) {
//         matrix[i] = readLine().replace(/\s+$/g, '').split(' ').map(matrixTemp => parseInt(matrixTemp, 10));
//     }

//     matrixRotation(matrix, r);
// }

const example = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]
const expected = [
  [3,4,8,12],
  [2,11,10,16],
  [1,7,6,15],
  [5,9,13,14]
]

console.log(matrixRotation(example, 2))
printMatrix(expected)

// (0,0) (0,1) (0,2) (0,3)
// (1,0) (1,1) (1,2) (1,3)
// (2,0) (2,1) (2,2) (2,3)
// (3,0) (3,1) (3,2) (3,3)

// R:2 => 

// (2,0) (1,0) (0,0) (0,1)
// (3,0) (2,2) (2,1) (0,2)
// (3,1) (1,2) (1,1) (0,3)
// (3,2) (3,3) (2,3) (1,3)
