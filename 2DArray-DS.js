const canCalculateHourglass = (height, width) => (x, y) => {
  return (x+3 <= height) &&  (y+3 <= width)
}

function hourglassSum(arr) {
  const height = arr.length
  const width = arr[0].length
  let max
  const hourglassX = [0,0,0,1,2,2,2]
  const hourglassY = [0,1,2,1,0,1,2]

  const canCalculateHourglassForMatrix = canCalculateHourglass(height, width)
  for (let x=0; x<height; x++) {
    for (let y=0; y<width; y++) {
      if (canCalculateHourglassForMatrix(x,y)) {
        let localSum = 0
        for (let combinationIndex=0; combinationIndex<hourglassX.length; combinationIndex++) {
          const xIndex = x + hourglassX[combinationIndex]
          const yIndex = y + hourglassY[combinationIndex]
          localSum += arr[xIndex][yIndex]
        }
        if (max === undefined || localSum > max) {
          max = localSum
        }
      }
    }
  }
  return max
}

const example = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
] // Expected: 19

console.log(hourglassSum(example))