---
to: src/<%= name %>/index.js
---
import { readFile } from '_utils/file'

const solve = (line) => {
  // write your solution here

  console.log('> result 1:', line)

  // and the second part here
  // console.log('> result 2:')
}

export default () => {
  console.log('--- Day <%= name %>: Insert your title HERE ---')

  return readFile('<%= name %>/input.in')
    .then((data) => {
      const [line] = data.split('\n')
      solve(line)
    })
    .catch((err) => {
      console.error('Error:', err)
    })
}
