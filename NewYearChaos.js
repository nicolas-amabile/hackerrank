function minimumBribes(q) {
  const arr = q.slice()
  const { length } = arr
  let tooChaotic = false
  let movements = 0
  arr.forEach((element, index) => {
    const correctIndex = element - 1
    const diff = Math.abs(correctIndex - index)
    if (diff > 2) {
      tooChaotic = true
    }
  })

  if (!tooChaotic) {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (arr[j] > arr[j + 1]) {
          let tmp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = tmp
          movements++
        }
      }
    }
  }

  if (tooChaotic) {
    console.log("Too chaotic")
  } else {
    console.log(movements)
  }
}

const Q1 = [2, 1, 5, 3, 4]
minimumBribes(Q1) // Expected: 3

const Q2 = [2, 5, 1, 3, 4]
minimumBribes(Q2) // Expected: Too chaotic

const Q3 = [5, 1, 2, 3, 7, 8, 6, 4]
minimumBribes(Q3) // Expected: Too chaotic

const Q4 = [1, 2, 5, 3, 7, 8, 6, 4]
minimumBribes(Q4) // Expected: 7. WRONG. Should be TOo chaotic. There is no way '4' can be in that position
