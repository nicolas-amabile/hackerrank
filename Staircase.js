function staircase(n) {
  let spaces, numerals
  for (let i=0; i<n; i++) {
    spaces = n-i > 1 ? ' '.repeat(n-1-i) : ''
    numerals = '#'.repeat(i+1)
    console.log(`${spaces}${numerals}`)
  }
}

const example = 6
staircase(example)