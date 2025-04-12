import type { Packs } from '@/types';

import altaViaOne from './alta-via-one';
import annapurnaCircuit from './annapurna-circuit';
import caminoDeSantiago from './camino-de-santiago';
import grandRandonneeTwenty from './grande-randonnee-twenty';
import oCircuit from './o-circuit';
import overnightBackpacking from './overnight-backpacking';
import tourDuMontBlanc from './tour-du-mont-blanc';
import tourDuMontBlanc2024 from './tour-du-mont-blanc-2024';
import westHighlandWay from './west-highland-way';

const data: Packs.Raw[] = [
  {
    items: overnightBackpacking,
    slug: 'overnight-backpacking',
    title: 'Overnight Backpacking',
    type: 'Spring to Fall',
  },
  {
    items: tourDuMontBlanc2024,
    slug: 'tour-du-mont-blanc-2024',
    title: 'Tour du Mont Blanc 2024',
    type: '2024 Thru-hike',
  },
  {
    items: grandRandonneeTwenty,
    slug: 'grande-randonnee-20',
    title: 'Grande Randonnée 20',
    type: '2023 Thru-hike',
  },
  {
    items: westHighlandWay,
    slug: 'west-highland-way',
    title: 'West Highland Way',
    type: '2022 Thru-hike',
  },
  {
    items: oCircuit,
    slug: 'o-circuit',
    title: 'O Circuit',
    type: '2020 Thru-hike',
  },
  {
    items: annapurnaCircuit,
    slug: 'annapurna-circuit',
    title: 'Annapurna Circuit',
    type: '2019 Thru-hike',
  },
  {
    items: altaViaOne,
    slug: 'alta-via-1',
    title: 'Alta Via 1',
    type: '2019 Thru-hike',
  },
  {
    items: tourDuMontBlanc,
    slug: 'tour-du-mont-blanc',
    title: 'Tour du Mont Blanc 2018',
    type: '2018 Thru-hike',
  },
  {
    items: caminoDeSantiago,
    slug: 'camino-de-santiago',
    title: 'Camino de Santiago',
    type: '2018 Thru-hike',
  },
];

export default data;
