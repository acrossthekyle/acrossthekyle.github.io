import type { Posts } from '@/types';

import altaVia12019 from './alta-via-1-2019';
import annapurnaCircuit2019 from './annapurna-circuit-2019';
import caminoDeSantiago2018 from './camino-de-santiago-2018';
import chile2016 from './chile-2016';
import egypt2023 from './egypt-2023';
import grandRandonnee202023 from './grande-randonnee-20-2023';
import mtBelford2022 from './mt-belford-2022';
import mtBierstadt2020 from './mt-bierstadt-2020';
import mtDecali2021 from './mt-decali-2021';
import mtElbert2019 from './mt-elbert-2019';
import mtGrays2020 from './mt-grays-2020';
import mtMassive2022 from './mt-massive-2022';
import mtPlata2020 from './mt-plata-2020';
import mtShavano2021 from './mt-shavano-2021';
import mtQuandary2019 from './mt-quandary-2019';
import oCircuit2020 from './o-circuit-2020';
import tourDuMontBlanc2018 from './tour-du-mont-blanc-2018';
import tourDuMontBlanc2024 from './tour-du-mont-blanc-2024';
import westHighlandWay2022 from './west-highland-way-2022';

const data: Posts.Raw[] = [
  tourDuMontBlanc2024,
  grandRandonnee202023,
  egypt2023,
  mtMassive2022,
  mtBelford2022,
  westHighlandWay2022,
  mtDecali2021,
  mtShavano2021,
  mtGrays2020,
  mtBierstadt2020,
  mtPlata2020,
  oCircuit2020,
  annapurnaCircuit2019,
  mtQuandary2019,
  mtElbert2019,
  altaVia12019,
  tourDuMontBlanc2018,
  caminoDeSantiago2018,
  chile2016,

  /************************/
  //
  // Geneva Switzerland
  //
  /************************/

  {
    date: 'July 24th, 2024',
    image: '',
    isPrivate: true,
    locationFull: 'Geneva, Switzerland',
    locationShort: 'Geneva',
    marker: {
      left: '46.1%',
      top: '18.5%',
    },
    snippet: '',
    tags: [],
    title: 'Playing tourist in Geneva, Switzerland',
    titleShort: 'Playing tourist in Geneva',
    uri: '',
  },

  /************************/
  //
  // Buenos Aires / Montevideo
  //
  /************************/

  {
    date: 'Mar 20th, 2015',
    image: '',
    isPrivate: true,
    locationFull: 'Buenos Aires, Argentina and Montevideo, Uruguay',
    locationShort: 'Argentina and Uruguay',
    marker: {
      left: '26.5%',
      top: '81%',
    },
    snippet: '',
    tags: [],
    title: 'Exploring Buenos Aires and Montevideo',
    titleShort: 'Buenos Aires and Montevideo',
    uri: '',
  },

  /************************/
  //
  // Cancun
  //
  /************************/

  {
    date: 'Jan 12th, 2015',
    image: '',
    isPrivate: true,
    locationFull: 'Cancun, Mexico',
    locationShort: 'Cancun',
    marker: {
      left: '15.9%',
      top: '39%',
    },
    snippet: '',
    tags: [],
    title: 'Vacationing in Cancun, Mexico',
    titleShort: 'Vacationing in Cancun',
    uri: '',
  },
];

export default data;
