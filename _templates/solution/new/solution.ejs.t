---
to: src/<%= name %>/index.js
---
import { readFile } from '_utils/file'

const solve = (data) => {
  // write your solution here

  console.log('> result 1:', data)

  // and the second part here
  // console.log('> result 2:')
}

export default async function () {
  console.log('--- Day <%= name %>: Insert your title HERE ---')

  let data

  try {
    data = await readFile('<%= name %>/input.in')
  } catch (err) {
    console.error('Error:', err)
  }

  return solve(data)
}
