import { imageUrl, mapUrl } from '../utils';
import { Trip } from '../types';

export const TourDuMontBlanc: Trip = {
  countries: ['France', 'Italy'],
  days: '11',
  gearLink: 'https://lighterpack.com/r/yi7qss',
  id: 'tour-du-mont-blanc',
  image: imageUrl('tmb.jpeg', '1695314658704'),
  itinerary: [
    {
      elevationGainFeet: 4934,
      elevationLossFeet: 2559,
      miles: 9.12,
      start: `Gite Michel Fagot`,
      startAltitudeFeet: 3268,
      stop: `Auberge le Truc`,
      stopAltitudeFeet: 5732,
      steps: 28429
    },
    {
      elevationGainFeet: 4455,
      elevationLossFeet: 2090,
      miles: 11,
      start: `Auberge le Truc`,
      startAltitudeFeet: 5732,
      stop: `Refuge de La Croix du Bonhomme`,
      stopAltitudeFeet: 8035,
      steps: 30947
    },
    {
      elevationGainFeet: 3300,
      elevationLossFeet: 2940,
      miles: 9.13,
      start: `Refuge de La Croix du Bonhomme`,
      startAltitudeFeet: 8035,
      stop: `Refuge Robert Blanc`,
      stopAltitudeFeet: 8392,
      steps: 31072
    },
    {
      elevationGainFeet: 4452,
      elevationLossFeet: 6186,
      miles: 14,
      start: `Refuge Robert Blanc`,
      startAltitudeFeet: 8392,
      stop: `Maison Veille`,
      stopAltitudeFeet: 6437,
      steps: 32518
    },
    {
      elevationGainFeet: 5394,
      elevationLossFeet: 5180,
      miles: 14.4,
      start: `Maison Veille`,
      startAltitudeFeet: 6437,
      stop: `Rifugio Bonatti`,
      stopAltitudeFeet: 6765,
      steps: 34764
    },
    {
      elevationGainFeet: 3301,
      miles: 13,
      start: `Rifugio Bonatti`,
      startAltitudeFeet: 6765,
      stop: `L'Auberge Maya Joie`,
      stopAltitudeFeet: 5267,
      steps: 37849
    },
    {
      elevationGainFeet: 1749,
      elevationLossFeet: 2280,
      miles: 10.9,
      start: `L'Auberge Maya Joie`,
      startAltitudeFeet: 5267,
      stop: `Gite Bon Abri`,
      stopAltitudeFeet: 4789,
      steps: 33259
    },
    {
      elevationGainFeet: 2644,
      elevationLossFeet: 3169,
      miles: 9.32,
      start: `Gite Bon Abri`,
      startAltitudeFeet: 4789,
      stop: `Refuge le Peuty`,
      stopAltitudeFeet: 4658,
      steps: 26894
    },
    {
      elevationGainFeet: 3819,
      elevationLossFeet: 3773,
      miles: 9.1,
      start: `Refuge du Peuty`,
      startAltitudeFeet: 4658,
      stop: `Auberge la Boerne`,
      stopAltitudeFeet: 4757,
      steps: 24669
    },
    {
      elevationGainFeet: 3245,
      elevationLossFeet: 1864,
      miles: 4.64,
      start: `Auberge la Boerne`,
      startAltitudeFeet: 4757,
      stop: `Refuge de lo Flegere`,
      stopAltitudeFeet: 6234,
      steps: 20439
    },
    {
      elevationGainFeet: 2487,
      elevationLossFeet: 1400,
      miles: 6.2,
      start: `Refuge de lo Flegere`,
      startAltitudeFeet: 6234,
      stop: `Refuge de Bellechat`,
      stopAltitudeFeet: 7051,
      steps: 22552
    },
    {
      elevationGainFeet: 383,
      elevationLossFeet: 3783,
      miles: 4.1,
      start: `Refuge de Bellechat`,
      startAltitudeFeet: 7051,
      stop: `Gite Michel Fagot`,
      stopAltitudeFeet: 3268,
      steps: 22385
    }
  ],
  mapBackgroundUrl: imageUrl('tmb-map.jpeg', '1710279889351'),
  mapUrl: mapUrl('1dC5Om3SIo-_WeKYPZSpDVFAQGHG_cI8'),
  miles: '112',
  months: ['September'],
  mountains: ['Alps'],
  title: ['Tour du', 'Mont', 'Blanc'],
};
