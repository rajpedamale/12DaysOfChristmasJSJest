'use strict';

const twelveDaysOfChristmasSong = require('./12DaysOfChristmas');

describe('12DaysOfChristmas poem', () => {
  it('should have 12 stanzas', () => {
    const poem = twelveDaysOfChristmasSong();
    expect(poem.split('\n\n').length).toEqual(12);
  });
});
