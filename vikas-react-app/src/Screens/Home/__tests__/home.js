/* eslint-disable no-undef */
const sum = (a, b) => a + b;

describe('Home page', () => {
  it('sum', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
