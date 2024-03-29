import { IMAGE_BASE, MAP_BASE } from './constants';

export function getImageUrl(id: string, updatedAt: string) {
  return `${IMAGE_BASE}/${id}?updatedAt=${updatedAt}`;
}

export function getMapUrl(id: string) {
  return `${MAP_BASE}${id}&usp=sharing`;
}

export function toggleCheckbox(id: string, checked: boolean) {
  (document.getElementById(id) as HTMLInputElement)!.checked = checked;
}

export function formatDistance(raw: number) {
  return raw.toFixed(0);
}
