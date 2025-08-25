import type { Date } from '@/types';

export function getDate(date: Date) {
  return date.date ?? date.years.join(' - ');
}
