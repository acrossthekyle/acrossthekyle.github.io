import type { Trip } from '@/types';

export function getStats(trip?: Trip) {
  if (!trip) {
    return null;
  }

  if (trip.type === 'thru-hiking' && trip.stats.distance) {
    return `${trip.stats.distance.value.imperial} ${trip.stats.distance.units.imperial.full} over ${trip.stats.days.value} ${trip.label}s`;
  }

  if (trip.type === 'section-hiking' && trip.stats.distance) {
    return `${trip.stats.days.value} ${trip.label}s covering ${trip.stats.distance.value.imperial} ${trip.stats.distance.units.imperial.full}`;
  }

  return null;
}


export function numToWords(num = 0) {
  if (num === 0) {
    return 'Zero';
  };

  num = (
    '0'.repeat(2 * (num += '').length % 3) + num
  ).match(/.{3}/g);

  let out = '',
      T10s = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
      T20s = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
      sclT = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion'];

  num.forEach((n, i) => {
    if (+n) {
     let hund =+ n[0],
         ten =+ n.substring(1),
         scl = sclT[num.length - i - 1];

     out += (out ? ' ' : '') + (hund ? T10s[hund] + ' Hundred' : '') + (hund && ten ? ' ' : '') + (ten < 20 ? T10s[ten] : T20s[+n[1]] + (+n[2] ? '-' : '') + T10s[+n[2]]);

     out += (out && scl ? ' ' : '') + scl;
  }});

  return out;
}
