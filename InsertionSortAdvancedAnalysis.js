
function insertionSort (arr) {
  let movements = 0
  for(let i=0; i<arr.length; i++) {
    const value = arr[i]
    let j
    for (j = i - 1; j > -1 && arr[j] > value; j--) {
      arr[j+1] = arr[j]
      movements++
    }
    arr[j + 1] = value
  }
  return movements
}

const example = '2 1 3 1 2'
console.log(insertionSort(example))