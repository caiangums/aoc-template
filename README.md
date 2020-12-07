# 🎄Advent of Code - Template

> Opinionated template for solving Advent of Code with JS

## Usage

Dependencies:
- NodeJS
- Yarn (or npm)

After creating your repo based on this template you can customize this Readme and the `package.json`. After that you should install all the dependencies

```sh
$ yarn
```

Create your daily solutions based on the [day 00](./src/00) directory and add them to the main [`index.js`](./src/index.js):

```js
import solve00 from './00'
import solve01 from './01' // <- here

const solveAll = async () => {
  await solve00()
  await solve01() // <- and here
}

export default solveAll
```

The puzzle inputs are not going to be added, as it changes based on user.

## Running

Run and see solutions
```sh
$ yarn solve
```

See tests (wth Jest)
```sh
$ yarn test
```

Lint your code
```sh
$ yarn lint
```

## Tests

> under construction

The suggested lib for testing is [Jest](https://jestjs.io/).

