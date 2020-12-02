import { readFile } from '_utils/file'

export const prepareForChristmas = (liters) => Math.floor((liters * 100) / 12)

const solve = (fuel) => {
  const totalKm = prepareForChristmas(fuel)

  console.log('> result 1:', totalKm)
}

export default () => {
  console.log('--- Day 00: Starting the Engines ---')

  return readFile('00/input.in')
    .then((data) => {
      const [fuel] = data.split('\n')
      solve(Number(fuel))
    })
    .catch((err) => {
      console.error('Error:', err)
    })
}
