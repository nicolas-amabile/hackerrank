function birthdayCakeCandles(ar) {
  let max
  let quantity = 0
  ar.forEach(current => {
    if (current === max) {
      quantity++
    } else if (!max || current > max) {
      quantity=1
      max = current
    }
  })
  return quantity
}

const example = [3, 2, 1, 3] // Expected: 2
console.log(birthdayCakeCandles(example))