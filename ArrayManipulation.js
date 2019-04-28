function arrayManipulation(n, queries) {
  const arr = new Array(n).fill(0)
  queries.forEach(([a, b, k]) => {
    for (let i = a-1; i<b; i++) {
      arr[i] += k
    }  
  })
  return Math.max(...arr)
}

const N1 = 5
const QUERIES1 = [
  [1, 2, 100],
  [2, 5, 100],
  [3, 4, 100]
]
// console.log(arrayManipulation(N1, QUERIES1)) // Expected: 200

const N2 = 10
const QUERIES2 = [
  [2, 6, 8],
  [3, 5, 7],
  [1, 8, 1],
  [5, 9, 15]
]

// [0, 0, 0,  0,  0,  0,  0,  0,  0,  0]
// [0, 8, 8,  8,  8,  8,  0,  0,  0,  0]
// [0, 8, 15, 15, 15, 8,  0,  0,  0,  0]
// [1, 9, 16, 16, 16, 9,  1,  1,  0,  0]
// [1, 9, 16, 16, 31, 24, 16, 16, 15, 0]

console.log(arrayManipulation(N2, QUERIES2)) // Expected: 31

