import type { Date } from '@/types';

export function getTripDate(date: Date, withRange: boolean = false) {
  if (date.dates) {
    let value = `${date.dates.start.short.month} ${date.dates.start.short.day}`;

    if (withRange) {
      value = `${value} - ${date.dates.end.short.month} ${date.dates.end.short.day}`;
    }

    return `${value} ${date.year}`;
  }

  return `${date.year.join(' - ')}`;
}

export function getStaticType(type: string) {
  if (type === 'thru-hiking') {
    return 'thru-hike';
  }

  if (type === 'section-hiking') {
    return 'section-hike';
  }

  if (type === 'vacationing') {
    return 'vacation';
  }

  return type;
}
