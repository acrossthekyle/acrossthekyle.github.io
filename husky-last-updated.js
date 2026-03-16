/* eslint-disable */
// @ts-nocheck

const { format } = require('date-fns');
const fs = require('fs');

const date = format(new Date(), 'LLL do yyyy');

const data = {
  lastUpdated: date,
};

fs.writeFile(
  'src/db/config.js',
  `const data = ${JSON.stringify(data, null, 2)};\n\r\n\rexport default data;`,
  () => {},
);
