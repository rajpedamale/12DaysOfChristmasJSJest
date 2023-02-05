'use strict';

const days = new Array(12).fill('A partridge in a pear tree.');


function twelveDaysOfChristmasSong() {
  const stanzas = days.map((day) => `${day}\n`);
  return stanzas.join('\n');
}

module.exports = twelveDaysOfChristmasSong;
