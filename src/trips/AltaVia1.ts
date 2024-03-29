import { getImageUrl, getMapUrl } from '../utils';
import { Trip } from '../types';

export const AltaVia1: Trip = {
  countries: ['Italy'],
  days: '10',
  gearLink: 'https://lighterpack.com/r/kolkui',
  id: 'alta-via-1',
  image: getImageUrl('altavia.jpeg', '1695314660416'),
  itinerary: [
    {
      elevationGainFeet: 3163,
      elevationLossFeet: 1145,
      miles: 8,
      start: `Braies`,
      startAltitudeFeet: 4751,
      stop: `Rifugio Biella`,
      stopAltitudeFeet: 6752,
      steps: 22404
    },
    {
      elevationGainFeet: 2221,
      elevationLossFeet: 3186,
      miles: 9.5,
      start: `Rifugio Biella`,
      startAltitudeFeet: 6752,
      stop: `Rifugio Lavarella`,
      stopAltitudeFeet: 6705,
      steps: 24631
    },
    {
      elevationGainFeet: 1841,
      elevationLossFeet: 1969,
      miles: 8.41,
      start: `Rifugio Lavarella`,
      startAltitudeFeet: 6705,
      stop: `Rifugio Scotoni`,
      stopAltitudeFeet: 6565,
      steps: 20656
    },
    {
      elevationGainFeet: 4472,
      elevationLossFeet: 3068,
      miles: 10.8,
      start: `Rifugio Scotoni`,
      startAltitudeFeet: 6565,
      stop: `Rifugio Averau`,
      stopAltitudeFeet: 8717,
      steps: 31523
    },
    {
      elevationGainFeet: 3218,
      elevationLossFeet: 4835,
      miles: 10.8,
      start: `Rifugio Averau`,
      startAltitudeFeet: 8717,
      stop: `Rifugio Citta de Fume`,
      stopAltitudeFeet: 6293,
      steps: 27944
    },
    {
      elevationGainFeet: 3280,
      elevationLossFeet: 2037,
      miles: 9.6,
      start: `Rifugio Citta de Fume`,
      startAltitudeFeet: 6293,
      stop: `Rifugio Tissi`,
      stopAltitudeFeet: 7532,
      steps: 27615
    },
    {
      elevationGainFeet: 2520,
      elevationLossFeet: 3982,
      miles: 9,
      start: `Rifugio Tissi`,
      startAltitudeFeet: 7532,
      stop: `Rifugio Carestiato`,
      stopAltitudeFeet: 5948,
      steps: 29460
    },
    {
      elevationGainFeet: 2008,
      elevationLossFeet: 1673,
      miles: 8.5,
      start: `Rifugio Carestiato`,
      startAltitudeFeet: 5948,
      stop: `Rifugio Pramperet`,
      stopAltitudeFeet: 6122,
      steps: 24350
    },
    {
      elevationGainFeet: 1749,
      elevationLossFeet: 2454,
      miles: 3.9,
      start: `Rifugio Pramperet`,
      startAltitudeFeet: 6122,
      stop: `Rifugio Pian de Fontana`,
      stopAltitudeFeet: 5435,
      steps: 15763
    },
    {
      elevationGainFeet: 906,
      elevationLossFeet: 4557,
      miles: 8.5,
      start: `Rifugio Pian de Fontana`,
      startAltitudeFeet: 5435,
      stop: `Bus Stop`,
      stopAltitudeFeet: 1697,
      steps: 33483
    }
  ],
  mapBackgroundUrl: getImageUrl('av-1-map.jpeg', '1710277614165'),
  mapUrl: getMapUrl('1RqKFH_q-Vxc0eemP4XDuIPVzKyo5Cps'),
  miles: '75',
  months: ['July'],
  mountains: ['Dolomites'],
  title: ['Alta', 'Via', '1'],
};
