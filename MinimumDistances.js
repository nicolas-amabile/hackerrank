function minimumDistances(a) {
  let min = null
  const items = {}
  a.forEach((el, index) => {
    if (!items[el]) items[el] = []
    items[el].push(index)
  })
  
  Object.values(items).filter(arr => arr.length > 1).forEach(indexes => {
    for (let i = 0; i<indexes.length-1; i++) {
      const current = indexes[i]
      const next = indexes[i + 1]
      const distance = next - current
      if (!min || min > distance) {
        min = distance
      }
    }
  })
  return min || -1
}

const example = [7, 1, 3, 4, 1, 7] // Expected: 3
console.log(minimumDistances(example))