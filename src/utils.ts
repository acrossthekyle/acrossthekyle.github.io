import { IMAGE_BASE } from './constants';

export function classNames(classes: Array<string | undefined | null | boolean>) {
  return classes.filter(Boolean).join(' ');
}

export function imageUrl(id: string, updatedAt: string) {
  return `${IMAGE_BASE}/${id}?updatedAt=${updatedAt}`;
}
