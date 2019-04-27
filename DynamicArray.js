function dynamicArray(n, queries) {
  let lastAnswer = 0
  const seqList = new Array(n)
  const result = []
  let seqIndex, lastAnswerIndex
  queries.forEach(([queryType, x, y]) => {
    seqIndex = (x^lastAnswer)%n
    if (!seqList[seqIndex]) seqList[seqIndex] = []
    switch (queryType) {
      case 1:
        seqList[seqIndex].push(y)
        break
      case 2:
        lastAnswerIndex = y%seqList[seqIndex].length
        lastAnswer = seqList[seqIndex][lastAnswerIndex]
        result.push(lastAnswer)
        break
      default:
        throw new Error('Unexpected query type')
    }
  })
  return result
}

const N = 2
const QUERIES = [
  [1, 0, 5],
  [1, 1, 7],
  [1, 0, 3],
  [2, 1, 0],
  [2, 1, 1]
]

console.log(dynamicArray(N, QUERIES))
// Expected: 
// 7
// 3
