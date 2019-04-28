function getSubstringsParts (s) {
  const parts = []
  for (let n=1; n<=s.length; n++) {
    for (let i=0; i<=s.length-n; i++) {
      parts.push(s.substr(i, n))
    }
  }
  return parts
}

function getSubstrings (s) {
  const parts = [s]
  let completeSubstring
  for (let numberOfCharsToIgnore=0; numberOfCharsToIgnore<=s.length; numberOfCharsToIgnore++) {
    for (let ignoredIndex=0; ignoredIndex<s.length; ignoredIndex++) {
      completeSubstring = s.substr(0, ignoredIndex) + s.substr(numberOfCharsToIgnore + ignoredIndex, s.length)
      const substringParts = getSubstringsParts(completeSubstring)
      substringParts.forEach(part => {
        if (!parts.includes(part)) {
          parts.push(part)
        }
      })
    }
  }
  return parts.sort((a,b) => a.length > b.length)
}

function longestSubsequence(x, y) {
  const fullX = y.includes(x) ? x.length : 0
  const fullY = x.includes(y) ? y.length : 0
  if (fullX || fullY) {
    return fullX > fullY ? fullX : fullY  
  }

  const xParts = getSubstrings(x)
  const yParts = getSubstrings(y)
  let longestMatch = 0

  const intersection = xParts.filter(s => -1 !== yParts.indexOf(s))

  intersection.forEach(s => {
    if (s.length>longestMatch) {
      longestMatch = s.length
    }
  })

  return longestMatch
}

const X = 'abc'
const Y = 'aedace'

// console.log(longestSubsequence(X, Y)) // Expected: 2
console.log(longestSubsequence('hackerranks', 'hackers')) // Expected: 7


