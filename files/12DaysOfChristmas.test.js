'use strict';

const twelveDaysOfChristmasSong = require('./12DaysOfChristmas');
let poem;
let stanzas;

describe('12DaysOfChristmas poem', () => {
  beforeEach(() => {
    poem = twelveDaysOfChristmasSong();
    stanzas = poem.split('\n\n');
  });
  
  it('should have 12 stanzas', () => {
    expect(stanzas.length).toEqual(12);
  });
  
  it('should have every stanza end with same line', () => {
    stanzas.forEach(stanza => {
      const lastLine = stanza.trim().split('\n').slice(-1)[0];
      expect(lastLine).toEqual('A partridge in a pear tree.');
    });
  });
  
  it('should have the same second line in every stanza', () => {
    stanzas.forEach(stanza => {
      const secondLine = stanza.split('\n')[2];
      expect(secondLine).toEqual('My true love gave to me:');
    });
  });
});
