const ADVANCE = 'ADVANCE'
const GO_BACK = 'GO_BACK'

const isObstruction = n => n === -1
const isDiamond = n => n === 1

const f = ({ mat, x, y, direction }) => {
  const { length } = mat 
  const isValidPosition = x>=0 && y>=0 && x<length && y<length
  if (!isValidPosition) return 0
  if (isObstruction(mat[x][y])) return 0
  const done = direction === GO_BACK && x === 0 && y === 0
  if (done) return 0
  let diamonds = 0
  const newM = mat.slice()
  if (isDiamond(newM[x][y])) {
    diamonds++
    newM[x][y]++
  }
  if (direction === GO_BACK || (direction === ADVANCE && x===length-1 && y===length-1)) {
    return diamonds + Math.max(f({ mat: newM, x: x-1, y, direction: GO_BACK }), f({ mat: newM, x, y: y-1, direction: GO_BACK }))
  } else {
    return diamonds + Math.max(f({ mat: newM, x: x+1, y, direction: ADVANCE }), f({ mat: newM, x, y: y+1, direction: ADVANCE }))
  }
}

function collectMax(mat) {
  const { length } = mat 
  if (isObstruction(mat[length-1][length-1])) return 0
  return f({ mat, x: 0, y: 0, direction: ADVANCE })
}

const M1 = [
  [0, 1, -1],
  [1, 0, -1],
  [1, 1, 1]
]
console.log(collectMax(M1)) // Expected: 5

const M2 = [
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]
console.log(collectMax(M2)) // Expected: 7

const M3 = [
  [0, 1, 1],
  [1, 0, -1],
  [1, 1, -1]
]
console.log(collectMax(M3)) // Expected: 0
