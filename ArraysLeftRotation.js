function rotLeft(a, d) {
  const result = []
  let rotate = d%a.length
  let i = rotate 
  while (result.length < a.length) {
    result.push(a[i])
    i = (i+1)%a.length
  }
  return result
}

const A = [1, 2, 3, 4, 5]
const D = 4
console.log(rotLeft(A, D)) // Expected: [5, 1, 2, 3, 4]
