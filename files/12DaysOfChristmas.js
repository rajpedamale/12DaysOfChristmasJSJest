'use strict';

const days = [
  {day: 'first'},
  {day: 'second'},
  {day: 'third'},
  {day: 'fourth'},
  {day: 'fifth'},
  {day: 'sixth'},
  {day: 'seventh'},
  {day: 'eighth'},
  {day: 'ninth'},
  {day: 'tenth'},
  {day: 'eleventh'},
  {day: 'twelvth'},
];
const secondLine = 'My true love gave to me:';
const lastLine = 'A partridge in a pear tree.';

function twelveDaysOfChristmasSong() {
  const stanzas = days.map((day, index) => `On the ${day.day} day of Christmas
${secondLine}
${index || ' and'}
${lastLine}`);
  return stanzas.join('\n\n');
}

module.exports = twelveDaysOfChristmasSong;
