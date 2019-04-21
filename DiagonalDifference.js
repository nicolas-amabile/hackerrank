function diagonalDifference(arr) {
  const size = arr.length
  let  primaryDiagonal = 0
  let secondaryDiagonal = 0

  for (let i=0; i<size; i++) {
    primaryDiagonal += arr[i][i]
    secondaryDiagonal += arr[size-1-i][i]
  }
  const sum = primaryDiagonal - secondaryDiagonal
  return sum < 0 ? sum*-1 : sum
}

const example = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
] // Expected: 15

console.log(diagonalDifference(example))