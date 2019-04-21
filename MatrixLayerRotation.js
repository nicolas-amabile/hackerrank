'use strict';

function buildLimitsMatrix (height, width) {
  const MAX = new Array(height)
  const MIN = new Array(height)
  let maxX, maxY
  for (let x=0; x<height; x++) {
    for (let y=0; y<width; y++) {
      if (!MIN[x]) MIN[x] = new Array(width)
      if (!MAX[x]) MAX[x] = new Array(width)
      const layer = Math.min(x,y)
      if (MIN[x][y] === undefined) {
        MIN[x][y] = [layer, layer]
        maxX = height - layer - 1
        maxY = width - layer - 1
        MAX[x][y] = [maxX, maxY]
        
        for (let i=layer; i<=maxY; i++) {
          if (!MIN[maxX]) MIN[maxX] = new Array(width)
          if (!MAX[maxX]) MAX[maxX] = new Array(width)

          MIN[maxX][i] = [layer, layer]
          MAX[maxX][i] = [maxX, maxY]
        }

        for (let i=layer; i<=maxX; i++) {
          if (!MIN[i]) MIN[i] = new Array(width)
          if (!MAX[i]) MAX[i] = new Array(width)
          MIN[i][maxY] = [layer, layer]
          MAX[i][maxY] = [maxX, maxY]
        }
      }
    }
  }

  return {
    MIN,
    MAX
  }
}
const D = {
  LEFT: 'left',
  DOWN: 'down',
  RIGHT: 'right',
  UP: 'up'
}

function getNewIndex ({ x, y, r, MIN, MAX }) {
  const minX = MIN[x][y][0]
  const minY = MIN[x][y][1]
  const maxX = MAX[x][y][0]
  const maxY = MAX[x][y][1]

  let newX = x
  let newY = y
  let offset = r

  let nextDirection = D.LEFT
  if (newX === minX) {
    nextDirection = D.DOWN
  } else if (newX === maxX) {
    nextDirection = D.RIGHT
  } else if (newY === maxY) {
    nextDirection = D.UP
  }
  while(offset > 0) {
    let canGoLeft = newY - 1 >= minY
    let canGoDown = newX + 1 <= maxX
    let canGoRight = newY + 1 <= maxY
    let canGoUp = newX - 1 >= minX
    if (canGoLeft && (nextDirection === D.LEFT || !canGoUp)) {
      while(canGoLeft && offset>0) {
        newY--
        canGoLeft = newY - 1 >= minY
        offset--
      }
      if (offset>0) nextDirection = D.DOWN
    } else if (canGoDown && (nextDirection === D.DOWN || !canGoLeft)) {
      while(canGoDown && offset>0) {
        newX++
        canGoDown = newX + 1 <= maxX
        offset--
      }
      if (offset>0) nextDirection = D.RIGHT

    } else if (canGoRight && (nextDirection === D.RIGHT || !canGoDown)) {
      while(canGoRight && offset>0) {
        newY++
        canGoRight = newY + 1 <= maxY
        offset--
      }
      if (offset>0) nextDirection = D.UP

    } else if (canGoUp && (nextDirection === D.UP || !canGoRight)) { 
      while(canGoUp && offset>0) {
        newX--
        canGoUp = newX - 1 >= minX
        offset--
      }
      if (offset>0) nextDirection = D.LEFT
    }
  }
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
  const height = matrix.length
  const width = matrix[0].length
  const { MIN, MAX } = buildLimitsMatrix(height, width)
  for (let x = 0; x<height; x++) {
    for(let y = 0; y<width; y++) {
      const [newX, newY] = getNewIndex({ x, y, r, MIN, MAX })
      if (!result[newX]) result[newX] = new Array(width)
      result[newX][newY] = matrix[x][y]
    }
  }
  printMatrix(result)
}

const R = 7
const example = [
  [1, 2, 3, 4],
  [7, 8, 9, 10],
  [13, 14, 15, 16],
  [19, 20, 21, 22],
  [25, 26, 27, 28]
]
const expected = [
  [28, 27, 26, 25],
  [22, 9, 15, 19],
  [16, 8, 21, 13],
  [10, 14, 20, 7],
  [4, 3, 2, 1]
]

// console.log('Input')
// printMatrix(example)

// console.log('\nResult')
matrixRotation(example, R)

// console.log('\nExpected')
// printMatrix(expected)
