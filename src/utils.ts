import type { Date } from '@/types';

export function getDate(date: Date) {
  return date.date ?? date.years.join(' - ');
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
