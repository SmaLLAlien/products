import { FromArrayPipe } from './from-array.pipe';

describe('FromArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new FromArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
