'use strict';

const TwelveDaysOfChristmasSong = require('./12DaysOfChristmas');

describe('12DaysOfChristmas poem', () => {
  it('should have 12 stanzas', () => {
    const poem = TwelveDaysOfChristmasSong();
    expect(poem.split('\n\n').length).toEqual(12);
  });
});
