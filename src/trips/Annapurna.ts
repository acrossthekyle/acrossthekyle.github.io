import { getImageUrl, getMapUrl } from '../utils';
import { Trip } from '../types';

export const Annapurna: Trip = {
  countries: ['Nepal'],
  days: '16',
  gearLink: 'https://lighterpack.com/r/f6hp0p',
  id: 'annapurna',
  image: getImageUrl('annapurna.jpeg', '1695314659315'),
  itinerary: [
    {
      elevationGainFeet: 2451,
      elevationLossFeet: 810,
      miles: 11.62,
      start: `Bhulbhule`,
      startAltitudeFeet: 2697,
      stop: `Jagat`,
      stopAltitudeFeet: 4478,
      steps: 35933
    },
    {
      elevationGainFeet: 2556,
      elevationLossFeet: 1001,
      miles: 9.32,
      start: `Jagat`,
      startAltitudeFeet: 4478,
      stop: `Dharapani`,
      stopAltitudeFeet: 6411,
      steps: 26883
    },
    {
      elevationGainFeet: 3576,
      elevationLossFeet: 1043,
      miles: 9.7,
      start: `Dharapani`,
      startAltitudeFeet: 6411,
      stop: `Chame`,
      stopAltitudeFeet: 8820,
      steps: 28138
    },
    {
      elevationGainFeet: 2497,
      elevationLossFeet: 456,
      miles: 9,
      start: `Chame`,
      startAltitudeFeet: 8820,
      stop: `Upper Pisang`,
      stopAltitudeFeet: 10962,
      steps: 28517
    },
    {
      elevationGainFeet: 2359,
      elevationLossFeet: 2077,
      miles: 12,
      start: `Upper Pisang`,
      startAltitudeFeet: 10962,
      stop: `Manang`,
      stopAltitudeFeet: 11586,
      steps: 20328
    },
    {
      elevationGainFeet: 2982,
      elevationLossFeet: 1043,
      miles: 9.4,
      start: `Manang`,
      startAltitudeFeet: 11586,
      stop: `Tilicho Lake Base Camp`,
      stopAltitudeFeet: 13516,
      steps: 32127
    },
    {
      elevationGainFeet: 6896,
      elevationLossFeet: 1732,
      miles: 20,
      start: `Tilicho Lake Base Camp`,
      startAltitudeFeet: 13516,
      stop: `Thorong Phedi`,
      stopAltitudeFeet: 14693,
      steps: 34744
    },
    {
      elevationGainFeet: 2986,
      elevationLossFeet: 5869,
      miles: 9.1,
      start: `Thorong Phedi`,
      startAltitudeFeet: 14693,
      stop: `Muktinath`,
      stopAltitudeFeet: 11952,
      steps: 38044
    },
    {
      elevationGainFeet: 2336,
      elevationLossFeet: 5476,
      miles: 15,
      start: `Muktinath`,
      startAltitudeFeet: 11952,
      stop: `Marpha`,
      stopAltitudeFeet: 8714,
      steps: 21394
    },
    {
      elevationGainFeet: 2799,
      elevationLossFeet: 4600,
      miles: 16.5,
      start: `Marpha`,
      startAltitudeFeet: 8714,
      stop: `Ghasa`,
      stopAltitudeFeet: 6922,
      steps: 32864
    },
    {
      elevationGainFeet: 5637,
      elevationLossFeet: 3702,
      miles: 16.1,
      start: `Ghasa`,
      startAltitudeFeet: 6922,
      stop: `Ghorepani`,
      stopAltitudeFeet: 9424,
      steps: 27724
    },
    {
      elevationGainFeet: 3793,
      elevationLossFeet: 6168,
      miles: 10.1,
      start: `Ghorepani`,
      startAltitudeFeet: 9424,
      stop: `Chomrong`,
      stopAltitudeFeet: 7168,
      steps: 40137
    },
    {
      elevationGainFeet: 6591,
      elevationLossFeet: 3511,
      miles: 10.8,
      start: `Chomrong`,
      startAltitudeFeet: 7168,
      stop: `Deurali`,
      stopAltitudeFeet: 10404,
      steps: 35617
    },
    {
      elevationGainFeet: 3333,
      elevationLossFeet: 358,
      miles: 4.2,
      start: `Deurali`,
      startAltitudeFeet: 10404,
      stop: `Basecamp`,
      stopAltitudeFeet: 13229,
      steps: 45555
    },
    {
      elevationGainFeet: 3869,
      elevationLossFeet: 9924,
      miles: 15.2,
      start: `Basecamp`,
      startAltitudeFeet: 13229,
      stop: `Chomrong`,
      stopAltitudeFeet: 7168,
      steps: 29314
    },
    {
      elevationGainFeet: 2421,
      elevationLossFeet: 1240,
      miles: 3,
      start: `Chomrong`,
      startAltitudeFeet: 7168,
      stop: `Motkyu`,
      stopAltitudeFeet: 5487,
      steps: 30949
    }
  ],
  mapBackgroundUrl: getImageUrl('annapurna-map.jpeg', '1710265671205'),
  mapUrl: getMapUrl('1y8tdEZxaJZ1OOjbo3HgVHJofVWEzt0s'),
  miles: '143',
  months: ['October', 'November'],
  mountains: ['Himalayas'],
  title: ['Annapurna', 'Circuit', '&', 'Basecamp'],
};
