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
const secondAndLaterLines = [
  'My true love gave to me:',
  'Twelve drummers drumming',
  'Eleven pipers piping',
  'Ten lords a-leaping',
  'Nine ladies dancing',
  'Eight maids a-milking',
  'Seven swans a-swimming',
  'Six geese a-laying',
  'Five golden rings',
  'Four calling birds',
  'Three french hens',
  'Two turtle doves and',
  'A partridge in a pear tree.'
];

function twelveDaysOfChristmasSong() {
  const stanzas = days.map((day, index) => {
    return `On the ${day.day} day of Christmas
${secondAndLaterLines[0]}
${index>1 && secondAndLaterLines[10]}
${index && secondAndLaterLines[11]}
${secondAndLaterLines[12]}`
});
  
  return stanzas.join('\n\n');
}

module.exports = twelveDaysOfChristmasSong;
