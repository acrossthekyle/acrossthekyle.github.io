import { getImageUrl, getMapUrl } from '../utils';
import { Trip } from '../types';

export const CaminoDeSantiago: Trip = {
  countries: ['Spain'],
  days: '33',
  gearLink: 'https://lighterpack.com/r/p1be03',
  id: 'camino-de-santiago',
  image: getImageUrl('camino.jpeg', '1695314660391'),
  itinerary: [
    {
      miles: 16,
      start: `Saint Jean Pied de Port`,
      stop: `Roncesvalles`,
      steps: 39991
    },
    {
      miles: 13.5,
      start: `Roncesvalles`,
      stop: `Zubiri`,
      steps: 31095
    },
    {
      miles: 11.9,
      start: `Zubiri`,
      stop: `Pamplona`,
      steps: 34656
    },
    {
      miles: 14.1,
      start: `Pamplona`,
      stop: `Puente la Reina`,
      steps: 40246
    },
    {
      miles: 13.5,
      start: `Puente la Reina`,
      stop: `Estella`,
      steps: 34091
    },
    {
      miles: 17.5,
      start: `Estella`,
      stop: `Sansol`,
      steps: 36998
    },
    {
      miles: 12.9,
      start: `Sansol`,
      stop: `Logrono`,
      steps: 37240
    },
    {
      miles: 17.1,
      start: `Logrono`,
      stop: `Najera`,
      steps: 40905
    },
    {
      miles: 13,
      start: `Najera`,
      stop: `Santo Domingo`,
      steps: 38080
    },
    {
      miles: 14.2,
      start: `Santo Domingo`,
      stop: `Belorado`,
      steps: 34750
    },
    {
      miles: 17.2,
      start: `Belorado`,
      stop: `Ages`,
      steps: 38987
    },
    {
      miles: 13.9,
      start: `Ages`,
      stop: `Burgos`,
      steps: 38827
    },
    {
      miles: 19.5,
      start: `Burgos`,
      stop: `Hontanas`,
      steps: 50032
    },
    {
      miles: 21.3,
      start: `Hontanas`,
      stop: `Fromista`,
      steps: 44624
    },
    {
      miles: 11.62,
      start: `Fromista`,
      stop: `Carrion`,
      steps: 33420
    },
    {
      miles: 24.5,
      start: `Carrion`,
      stop: `Sahagun`,
      steps: 52954
    },
    {
      miles: 19.4,
      start: `Sahagun`,
      stop: `Reliegos`,
      steps: 37860
    },
    {
      miles: 14.9,
      start: `Reliegos`,
      stop: `Leon`,
      steps: 44383
    },
    {
      miles: 13.4,
      start: `Leon`,
      stop: `Mazarife`,
      steps: 38379
    },
    {
      miles: 19.6,
      start: `Mazarife`,
      stop: `Astorga`,
      steps: 45707
    },
    {
      miles: 16.1,
      start: `Astorga`,
      stop: `Foncebadon`,
      steps: 37813
    },
    {
      miles: 16.8,
      start: `Foncebadon`,
      stop: `Ponferrada`,
      steps: 49802
    },
    {
      miles: 15,
      start: `Ponferrada`,
      stop: `Villafranca`,
      steps: 47381
    },
    {
      miles: 17.8,
      start: `Villafranca`,
      stop: `O Cebreiro`,
      steps: 40868
    },
    {
      miles: 24.5,
      start: `O Cebreiro`,
      stop: `Sarria`,
      steps: 45192
    },
    {
      miles: 13.7,
      start: `Sarria`,
      stop: `Portomarin`,
      steps: 40056
    },
    {
      miles: 25,
      start: `Portomarin`,
      stop: `Melide`,
      steps: 53769
    },
    {
      miles: 20.5,
      start: `Melide`,
      stop: `Pedrouzo`,
      steps: 50754
    },
    {
      miles: 12.4,
      start: `Pedrouzo`,
      stop: `Santiago de Compostela`,
      steps: 33533
    },
    {
      miles: 13.6,
      start: `Santiago de Compostela`,
      stop: `Negreira`,
      steps: 38692
    },
    {
      miles: 20.7,
      start: `Negreira`,
      stop: `Olveiroa`,
      steps: 47966
    },
    {
      miles: 21.5,
      start: `Olveiroa`,
      stop: `Fisterra`,
      steps: 59330
    }
  ],
  mapBackgroundUrl: getImageUrl('camino-map.jpeg', '1710281919132'),
  mapUrl: getMapUrl('1MM2kPzwx6-v81TOXLoG0SF_9IN6O-2w'),
  title: ['Camino', 'de', 'Santiago'],
  miles: '491',
  months: ['June', 'July'],
  mountains: ['Camino Frances'],
};
