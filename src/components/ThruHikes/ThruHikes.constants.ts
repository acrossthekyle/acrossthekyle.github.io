import { imageUrl } from '../../utils';
import { Section } from './ThruHikes.types';

export const SECTIONS: Section[] = [
  {
    id: 'introduction',
    image: '',
    title: 'Hikes',
    years: [],
    months: [],
    mountains: null,
    countries: [],
    gearLink: '',
    stats: []
  },
  {
    id: 'gr20',
    image: imageUrl('gr20.jpeg', '1695314654901'),
    title: 'Grande Randonnée 20',
    years: ['2023'],
    months: ['June', 'July'],
    mountains: null,
    countries: ['France'],
    gearLink: 'https://lighterpack.com/r/76sj40',
    stats: [
      {
        title: 'Distance',
        value: '70 miles'
      },
      {
        title: 'Days',
        value: '13'
      },
      {
        title: 'Max Elevation',
        value: '8,878 ft'
      },
      {
        title: 'Livestock Crossings',
        value: '5'
      }
    ]
  },
  {
    id: 'westhighlandway',
    image: imageUrl('westhighlandway.jpeg', '1695314654426'),
    title: 'West Highland Way',
    years: ['2022'],
    months: ['May'],
    mountains: ['Highlands'],
    countries: ['Scotland'],
    gearLink: 'https://lighterpack.com/r/ng8tzb',
    stats: [
      {
        title: 'Distance',
        value: '96 miles'
      },
      {
        title: 'Days',
        value: '6'
      },
      {
        title: 'Max Elevation',
        value: '1,798 ft'
      },
      {
        title: 'Torrential Downpours',
        value: '4'
      }
    ]
  },
  {
    id: 'ocircuit',
    image: imageUrl('ocircuit.jpeg', '1695314656648'),
    title: 'O Circuit',
    years: ['2020'],
    months: ['February'],
    mountains: ['Torres del Paine'],
    countries: ['Chile'],
    gearLink: 'https://lighterpack.com/r/bw0s1t',
    stats: [
      {
        title: 'Distance',
        value: '85 miles'
      },
      {
        title: 'Days',
        value: '7'
      },
      {
        title: 'Max Elevation',
        value: '3,937 ft'
      },
      {
        title: 'Destructively Windy Nights',
        value: '3'
      }
    ]
  },
  {
    id: 'annapurnacircuit',
    image: imageUrl('annapurna.jpeg', '1695314659315'),
    title: 'Annapurna',
    years: ['2019'],
    months: ['October', 'November'],
    mountains: ['Himalayas'],
    countries: ['Nepal'],
    gearLink: 'https://lighterpack.com/r/f6hp0p',
    stats: [
      {
        title: 'Distance',
        value: '143 miles'
      },
      {
        title: 'Days',
        value: '19'
      },
      {
        title: 'Max Elevation',
        value: '18,500 ft'
      },
      {
        title: 'Breathless Summits',
        value: '2'
      }
    ]
  },
  {
    id: 'altavia1',
    image: imageUrl('altavia.jpeg', '1695314660416'),
    title: 'Alta Via 1',
    years: ['2019'],
    months: ['July'],
    mountains: ['Dolomites'],
    countries: ['Italy'],
    gearLink: 'https://lighterpack.com/r/kolkui',
    stats: [
      {
        title: 'Distance',
        value: '75 miles'
      },
      {
        title: 'Days',
        value: '10'
      },
      {
        title: 'Max Elevation',
        value: '9,029 ft'
      },
      {
        title: 'Gourmet Meals',
        value: '10'
      }
    ]
  },
  {
    id: 'tourdumontblanc',
    image: imageUrl('tmb.jpeg', '1695314658704'),
    title: 'Tour du Mont Blanc',
    years: ['2018'],
    months: ['September'],
    mountains: ['Alps'],
    countries: ['France', 'Italy', 'Switzerland'],
    gearLink: 'https://lighterpack.com/r/yi7qss',
    stats: [
      {
        title: 'Distance',
        value: '112 miles'
      },
      {
        title: 'Days',
        value: '11'
      },
      {
        title: 'Max Elevation',
        value: '8,743 ft'
      },
      {
        title: 'Scary Cows',
        value: '1'
      }
    ]
  },
  {
    id: 'caminodesantiago',
    image: imageUrl('camino.jpeg', '1695314660391'),
    title: 'Camino de Santiago',
    years: ['2018'],
    months: ['June', 'July'],
    mountains: ['Camino Frances'],
    countries: ['France', 'Spain'],
    gearLink: 'https://lighterpack.com/r/p1be03',
    stats: [
      {
        title: 'Distance',
        value: '491 miles'
      },
      {
        title: 'Days',
        value: '33'
      },
      {
        title: 'Max Elevation',
        value: '4,934 ft'
      },
      {
        title: 'Lifelong Friends',
        value: '4'
      }
    ]
  }
];
