'use strict';

const twelveDaysOfChristmasSong = require('./12DaysOfChristmas');
let poem;

describe('12DaysOfChristmas poem', () => {
  beforeEach(() => {
    poem = twelveDaysOfChristmasSong();
  });
  
  it('should have 12 stanzas', () => {
    expect(poem.split('\n\n').length).toEqual(12);
  });
  
  it('should have every stanza end with same line', () => {
    const stanzas = poem.split('\n\n');
    stanzas.forEach(stanza => {
      const lastLine = stanza.trim().split('\n').slice(-1)[0];
      expect(lastLine).toEqual('A partridge in a pear tree.');
    });
  });
  /*
  it('should have the same second line in every stanza', () => {
    const stanzas = twelveDaysOfChristmasSong().split('\n\n');
    stanzas.forEach(stanza => {
        expect(stanza.trim()).toEqual('My true love gave to me:');
    });
  });*/
});
