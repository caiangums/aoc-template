import { readFile } from '_utils/file'

export const prepareForChristmas = (liters) => Math.floor((liters * 100) / 12)

export const solve = (fuel) => {
  const totalKm = prepareForChristmas(fuel)

  console.log('> result 1:', totalKm)
}

export default async function () {
  console.log('--- Day 00: Starting the Engines ---')

  let data

  try {
    data = await readFile('00/input.in')
  } catch (err) {
    console.error('Error:', err)
  }

  const [fuel] = data.split('\n')
  return solve(Number(fuel))
}
