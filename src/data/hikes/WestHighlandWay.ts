import { getImageUrl, getMapUrl } from 'utils';
import { Hike } from 'types';

export const WestHighlandWay: Hike = {
  countries: ['Scotland'],
  days: '6',
  gearLink: 'https://lighterpack.com/r/ng8tzb',
  id: 'west-highland-way',
  image: getImageUrl('westhighlandway.jpeg', '1695314654426'),
  itinerary: [
    {
      elevationGainFeet: 671,
      elevationLossFeet: 723,
      miles: 10.8,
      start: `Milngavie`,
      startAltitudeFeet: 196,
      stop: `Drymen`,
      stopAltitudeFeet: 146,
      steps: 41335,
      tripActivityLink: 'https://connect.garmin.com/modern/activity/8811335007'
    },
    {
      elevationGainFeet: 2121,
      elevationLossFeet: 2199,
      miles: 13.2,
      start: `Drymen`,
      startAltitudeFeet: 146,
      stop: `Sallochy`,
      stopAltitudeFeet: 43,
      steps: 35207,
      tripActivityLink: 'https://connect.garmin.com/modern/activity/8811344977'
    },
    {
      elevationGainFeet: 2926,
      elevationLossFeet: 2880,
      miles: 17.4,
      start: `Sallochy`,
      startAltitudeFeet: 43,
      stop: `Bienglas Farm`,
      stopAltitudeFeet: 73,
      steps: 40141,
      tripActivityLink: 'https://connect.garmin.com/modern/activity/8811360052'
    },
    {
      elevationGainFeet: 2775,
      elevationLossFeet: 2298,
      miles: 19.3,
      start: `Bienglas Farm`,
      startAltitudeFeet: 73,
      stop: `Bridge of Orchy`,
      stopAltitudeFeet: 522,
      steps: 41957,
      tripActivityLink: 'https://connect.garmin.com/modern/activity/8811374063'
    },
    {
      elevationGainFeet: 3335,
      elevationLossFeet: 3826,
      miles: 21.3,
      start: `Bridge of Orchy`,
      startAltitudeFeet: 522,
      stop: `Kinlochleven`,
      stopAltitudeFeet: 18,
      steps: 44011,
      tripActivityLink: 'https://connect.garmin.com/modern/activity/8811388430'
    },
    {
      elevationGainFeet: 2514,
      elevationLossFeet: 2505,
      miles: 15.9,
      start: `Kinlochleven`,
      startAltitudeFeet: 18,
      stop: `Fort William`,
      stopAltitudeFeet: 48,
      steps: 33276,
      tripActivityLink: 'https://connect.garmin.com/modern/activity/8811398305'
    },
  ],
  mapBackgroundUrl: getImageUrl('whw-map.jpeg', '1710261561777'),
  mapUrl: getMapUrl('1Msr8DFrL_JOi0irhOoK_DYfE7peE2XU'),
  miles: '96',
  months: ['May'],
  mountains: ['Highlands'],
  title: ['West', 'Highland', 'Way'],
};
