'use strict';

const twelveDaysOfChristmasSong = require('./12DaysOfChristmas');

describe('12DaysOfChristmas poem', () => {
  it('should have 12 stanzas', () => {
    const poem = twelveDaysOfChristmasSong();
    expect(poem.split('\n\n').length).toEqual(12);
  });
  
  it('should have every stanza end with same line', () => {
    const stanzas = twelveDaysOfChristmasSong().poem.split('\n\n');
    stanzas.forEach(stanza => {
        expect(stanza).toEqual('A partridge in a pear tree.');
    });
  });
});
