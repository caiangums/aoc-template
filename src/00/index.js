import { readFile } from '_utils/file'

export const prepareForChristmas = (liters) => Math.floor((liters * 100) / 12)

export const solve = (fuel) => {
  const totalKm = prepareForChristmas(fuel)

  console.log('> result 1:', totalKm)
}

export default function () {
  console.log('--- Day 00: Starting the Engines ---')

  const data = readFile('00/input.in')

  const [fuel] = data.split('\n')
  return solve(Number(fuel))
}
