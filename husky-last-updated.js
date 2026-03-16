/* eslint-disable */
// @ts-nocheck

const { format } = require('date-fns');
const fs = require('fs');

const date = format(new Date(), 'LLL do yyyy');

fs.writeFileSync('.last-updated', date, 'utf8');
