
function aVeryBigSum(ar) {
  return ar.split(' ').reduce((acc, current) => acc+parseInt(current), 0)
}

const example = '1000000001 1000000002 1000000003 1000000004 1000000005' // Expected: 5000000015
console.log(aVeryBigSum(example))