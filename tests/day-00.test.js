import { prepareForChristmas } from '_src/00';

describe('Day 00 - prepareForChristmas', () => {
  test('ride 100km with 12l of fuel', () => {
    expect(prepareForChristmas(12)).toEqual(100);
  });
});
