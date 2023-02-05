'use strict';

const days = new Array(12).fill();
const secondLine = 'My true love gave to me:';
const lastLine = 'A partridge in a pear tree.';

function twelveDaysOfChristmasSong() {
  const stanzas = days.map((day) => `
On the first day of Christmas
${secondLine}
${lastLine}`);
  return stanzas.join('\n\n');
}

module.exports = twelveDaysOfChristmasSong;
