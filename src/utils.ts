import { IMAGE_BASE, MAP_BASE } from './constants';

export function getImageUrl(id: string, ts: string) {
  return `${IMAGE_BASE}/${id}?updatedAt=${ts}`;
}

export function getMapUrl(id: string) {
  return `${MAP_BASE}${id}&usp=sharing`;
}

export function formatDistance(raw: number) {
  return raw.toFixed(0);
}
