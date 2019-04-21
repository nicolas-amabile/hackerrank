function plusMinus(arr) {
  const size = arr.length
  let positives = 0
  let negatives = 0
  let zeros = 0

  arr.forEach(element => {
    if (element > 0) positives++
    if (element < 0) negatives++
    if (element === 0) zeros++
  })
  console.log(positives/size)
  console.log(negatives/size)
  console.log(zeros/size)
}

const example = [-4, 3, -9, 0, 4, 1]
/* 
 * Expected:
 * 0.500000
 * 0.333333
 * 0.166667 
 */

plusMinus(example)
