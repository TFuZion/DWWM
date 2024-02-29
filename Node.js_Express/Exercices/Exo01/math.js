const pair = (a, b) => {
  const c = a + b
  if (c%2 === 0) {
    return `${c} est pair`;
  }
  else return `${c} est impair`;
} 

module.exports = {pair}