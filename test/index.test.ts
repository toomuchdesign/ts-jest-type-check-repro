import { hello } from '../src/index';
  
// Type check error
const foo: string = 1;

describe('hello', () => {
  it('returns greeting', () => {
    const actual = hello('world');
    expect(actual).toBe('world');
  });
});
