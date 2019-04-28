function minimumSwaps(arr) {
  const copy = arr.slice()
  let movements = 0
  let indexToSwap
  let isSorted = false
  let index = 0
  while (!isSorted) {
    const element = copy[index]
    indexToSwap = element - 1
    if (indexToSwap !== index) {
      copy[index] = copy[indexToSwap]
      copy[indexToSwap] = element
      movements++
    }
    if (copy[index] -1 === index) {
      index++
    }
    if (index === copy.length) {
      isSorted = true
    }
  }
  return movements
}

const EXAMPLE_1 = [1, 3, 5, 2, 4, 6, 7] // Expected: 3
console.log(minimumSwaps(EXAMPLE_1)) 

const EXAMPLE_2 = [7, 1, 3, 2, 4, 5, 6] // Expected: 5
console.log(minimumSwaps(EXAMPLE_2)) 

const EXAMPLE_3 = [4, 3, 1, 2] // Expected: 3
console.log(minimumSwaps(EXAMPLE_3)) 
