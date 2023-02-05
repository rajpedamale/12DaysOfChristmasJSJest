'use strict';

const twelveDaysOfChristmasSong = require('./12DaysOfChristmas');
let poem;
let stanzas;

const getNthLine = (n, lines) => {
  return lines.split('\n').slice(n)[0];
};

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
      const lastLine = getNthLine(-1, stanza);
      expect(lastLine).toEqual('A partridge in a pear tree.');
    });
  });
  
  it('should have the same second line in every stanza', () => {
    stanzas.forEach(stanza => {
      const secondLine = getNthLine(1, stanza);
      expect(secondLine).toEqual('My true love gave to me:');
    });
  });
  
  it('should have the first line in every stanza start and end the same way', () => {
    stanzas.forEach(stanza => {
      const firstLine = getNthLine(0, stanza);
      expect(firstLine).toMatch(/On the \w+ day of Christmas/);
    });
  });  
  
  it('should have the first line should be different in every stanza', () => {
    const firstLines = stanzas.map(stanza => getNthLine(0, stanza));
    const firstLinesSet = new Set(firstLines);
    expect(firstLinesSet.size).toMatch(12);
  });  
});
