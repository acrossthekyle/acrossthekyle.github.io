import { IMAGE_BASE, MAP_BASE } from './constants';

export function imageUrl(id: string, updatedAt: string) {
  return `${IMAGE_BASE}/${id}?updatedAt=${updatedAt}`;
}

export function mapUrl(id: string) {
  return `${MAP_BASE}${id}&usp=sharing`;
}
