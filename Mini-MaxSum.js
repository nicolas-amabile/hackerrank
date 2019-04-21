function miniMaxSum(arr) {
  let min, max
  for (let ignoredIndex=0; ignoredIndex<arr.length; ignoredIndex++) {
    const filteredArray = arr.filter((value, index) => index !== ignoredIndex)
    const localSum = filteredArray.reduce((acc, current) => acc+current, 0)
    if (!min || localSum < min) min = localSum
    if (!max || localSum > max) max = localSum
  }
  console.log(`${min} ${max}`)
}

const example = [1, 2, 3, 4, 5] // Expected: 10 14
miniMaxSum(example)