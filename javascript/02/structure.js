for (let current = 20; ; current = current + 1) {
  if (current % 9 === 0) {
    console.log(current)
    break
  }
}

const ask = (message) => {
  return typeof prompt !== 'undefined'
    ? prompt(message)
    : false
}

switch (ask('What is the weather like?')) {
  case 'rainy':
    console.log('Remember to bring an umbrella.')
    break
  case 'sunny':
    console.log('Good! Have a nice day!')
    break
  case 'cloudy':
    console.log('Go outside')
    break
  default:
    break
}

let i = 0
while (i < 100) {
  i++
  let outpu = ''
  if (i % 3 === 0) {
    outpu += 'Fizz'
  }
  if (i % 5 === 0) {
    outpu += 'Buzz'
  }
  console.log(outpu || i)
}

const size = 8

for (let i = 0; i < size; i++) {
  let output = ''
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
      output += '#'
    } else {
      output += ' '
    }
  }
  console.log(output)
}

console.log('\n', '-'.repeat(size), '\n')

let board = ''
for (let i = 0; i < size; i++) {
  // このループが終わったら改行を入れる
  for (let j = 0; j < size; j++) {
    // i が偶数か奇数かで # をずらす
    if ((i + j) % 2 === 0) {
      board += '#'
    } else {
      board += ' '
    }
  }
  board += '\n'
}
console.log(board)
