import sum from './sum';

describe('sum', () => {
  it('should sum two numbers', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(2, 2)).toBe(4);
    expect(sum(12, 2)).toBe(14);
    expect(sum(12, -2)).toBe(10);
  });

  it('should not sum strings', () => {
    expect(sum(2, '2')).toBe(null);
  });

  it('should not sum objects', () => {
    expect(sum(2, {})).toBe(null);
  });

  it('should not sum arrays', () => {
    expect(sum(2, [])).toBe(null);
  });
});
