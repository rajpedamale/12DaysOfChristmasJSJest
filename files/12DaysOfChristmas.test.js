'use strict';

const TwelveDaysOfChristmasSong = require('./12DaysOfChristmas');

describe('12DaysOfChristmas poem', () => {
  it('should compile and return string', () => {
    expect(TwelveDaysOfChristmasSong()).toEqual('');
  });
});
