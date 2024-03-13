import { imageUrl, mapUrl } from '../utils';
import { Trip } from '../types';

export const OCircuit: Trip = {
  countries: ['Chile'],
  days: '7',
  gearLink: 'https://lighterpack.com/r/bw0s1t',
  id: 'o-circuit',
  image: imageUrl('ocircuit.jpeg', '1695314656648'),
  itinerary: [
    {
      miles: 11.2,
      start: `Seron`,
      startAltitudeFeet: 682,
      stop: `Dickson`,
      stopAltitudeFeet: 554,
      steps: 24890
    },
    {
      miles: 7.5,
      start: `Dickson`,
      startAltitudeFeet: 554,
      stop: `Perros`,
      stopAltitudeFeet: 1872,
      steps: 32298
    },
    {
      miles: 11,
      start: `Perros`,
      startAltitudeFeet: 1872,
      stop: `Grey`,
      stopAltitudeFeet: 257,
      steps: 22147
    },
    {
      miles: 7.2,
      start: `Grey`,
      startAltitudeFeet: 257,
      stop: `Paine Grande`,
      stopAltitudeFeet: 148,
      steps: 31127
    },
    {
      miles: 12.8,
      start: `Paine Grande`,
      startAltitudeFeet: 148,
      stop: `Frances`,
      stopAltitudeFeet: 312,
      steps: 31224
    },
    {
      miles: 9.2,
      start: `Frances`,
      startAltitudeFeet: 312,
      stop: `Chileno`,
      stopAltitudeFeet: 1640,
      steps: 35209
    },
  ],
  mapBackgroundUrl: imageUrl('o-map.jpeg', '1710263899997'),
  mapUrl: mapUrl('1nrGVggIuQapwFrzldS2TkR7aXx1ravY'),
  miles: '85',
  months: ['February'],
  mountains: ['Patagonia'],
  title: ['Torres del', 'Paine', 'O Circuit'],
};
