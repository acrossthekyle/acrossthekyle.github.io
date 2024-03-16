import { getImageUrl, getMapUrl } from '../utils';
import { Trip } from '../types';

export const GrandeRandonnee20: Trip = {
  countries: ['France'],
  days: '13',
  gearLink: 'https://lighterpack.com/r/76sj40',
	id: 'grande-randonnee-20',
  image: getImageUrl('gr20.jpeg', '1695314654901'),
  itinerary: [
    {
      elevationGainFeet: 4849,
      elevationLossFeet: 815,
      miles: 7.7,
      start: `Calenzana`,
      startAltitudeFeet: 974,
      stop: `Refuge D'Ortu Di U Piobbu`,
      stopAltitudeFeet: 5060,
      steps: 27812,
      tripActivityLink: 'https://connect.garmin.com/modern/activity/11423492927'
    },
    {
      elevationGainFeet: 2882,
      elevationLossFeet: 3780,
      miles: 6.3,
      start: `Refuge D'Ortu Di U Piobbu`,
      startAltitudeFeet: 5060,
      stop: `Refuge de Carozzu`,
      stopAltitudeFeet: 4207,
      steps: 16968,
      tripActivityLink: 'https://connect.garmin.com/modern/activity/11423494667'
    },
    {
      elevationGainFeet: 2939,
      elevationLossFeet: 2419,
      miles: 4.75,
      start: `Refuge de Carozzu`,
      startAltitudeFeet: 4207,
      stop: `Ascu Stagnu`,
      stopAltitudeFeet: 4693,
      steps: 13863,
      tripActivityLink: 'https://connect.garmin.com/modern/activity/11451226190'
    },
    {
      elevationGainFeet: 4105,
      elevationLossFeet: 4064,
      miles: 7.95,
      start: `Ascu Stagnu`,
      startAltitudeFeet: 4693,
      stop: `Auberge U Vallone`,
      stopAltitudeFeet: 4735,
      steps: 21049,
      tripActivityLink: 'https://connect.garmin.com/modern/activity/11423499233'
    },
    {
      elevationGainFeet: 3071,
      elevationLossFeet: 3098,
      miles: 9.72,
      start: `Auberge U Vallone`,
      startAltitudeFeet: 4735,
      stop: `Hotel Castel di Vergio`,
      stopAltitudeFeet: 4644,
      steps: 27011,
      tripActivityLink: 'https://connect.garmin.com/modern/activity/11423501508'
    },
    {
      elevationGainFeet: 2202,
      elevationLossFeet: 1547,
      miles: 11.16,
      start: `Hotel Castel di Vergio`,
      startAltitudeFeet: 4644,
      stop: `Refuge de Manganu`,
      stopAltitudeFeet: 5282,
      steps: 29350,
      tripActivityLink: 'https://connect.garmin.com/modern/activity/11451263684'
    },
    {
      elevationGainFeet: 3031,
      elevationLossFeet: 2147,
      miles: 6.72,
      start: `Refuge de Manganu`,
      startAltitudeFeet: 5282,
      stop: `Refuge de Petra Piana`,
      stopAltitudeFeet: 6087,
      steps: 18856,
      tripActivityLink: 'https://connect.garmin.com/modern/activity/11451236310'
    },
    {
      elevationGainFeet: 1537,
      elevationLossFeet: 3022,
      miles: 6.87,
      start: `Refuge de Petra Piana`,
      startAltitudeFeet: 6087,
      stop: `Refuge de l'Onda`,
      stopAltitudeFeet: 4554,
      steps: 20964,
      tripActivityLink: 'https://connect.garmin.com/modern/activity/11451239100'
    },
    {
      elevationGainFeet: 2471,
      elevationLossFeet: 4008,
      miles: 7.68,
      start: `Refuge de l'Onda`,
      startAltitudeFeet: 4554,
      stop: `Vizzavona`,
      stopAltitudeFeet: 3037,
      steps: 23295,
      tripActivityLink: 'https://connect.garmin.com/modern/activity/11451242194'
    },
    {
      elevationGainFeet: 4857,
      elevationLossFeet: 3690,
      miles: 17.4,
      start: `Vizzavona`,
      startAltitudeFeet: 3037,
      stop: `Bocca di Verdi`,
      stopAltitudeFeet: 4227,
      steps: 41490,
      tripActivityLink: 'https://connect.garmin.com/modern/activity/11485963283'
    },
    {
      elevationGainFeet: 4969,
      elevationLossFeet: 3545,
      miles: 10.94,
      start: `Bocca di Verdi`,
      startAltitudeFeet: 4227,
      stop: `Refuge d'Usciolu`,
      stopAltitudeFeet: 5678,
      steps: 31974,
      tripActivityLink: 'https://connect.garmin.com/modern/activity/11485966316'
    },
    {
      elevationGainFeet: 3809,
      elevationLossFeet: 4453,
      miles: 13.88,
      start: `Refuge d'Usciolu`,
      startAltitudeFeet: 5678,
      stop: `Refuge d'Asinau`,
      stopAltitudeFeet: 5063,
      steps: 32972,
      tripActivityLink: 'https://connect.garmin.com/modern/activity/11485969109'
    },
    {
      elevationGainFeet: 3753,
      elevationLossFeet: 7961,
      miles: 18.89,
      start: `Refuge d'Asinau`,
      startAltitudeFeet: 5063,
      stop: `Conca`,
      stopAltitudeFeet: 831,
      steps: 49599,
      tripActivityLink: 'https://connect.garmin.com/modern/activity/11485972736'
    }
  ],
  mapBackgroundUrl: getImageUrl('gr20-map.png', '1710177465612'),
  mapUrl: getMapUrl('1X2_gXP50kDf5UBk-ZQuRRpVE32tOdds'),
  miles: '70',
  months: ['June', 'July'],
  mountains: ['Corsica'],
  title: ['Grande', 'Randonnée', '20'],
};
