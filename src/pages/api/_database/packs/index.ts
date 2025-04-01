import type { PackFromDatabase } from '@/types';

import altaViaOne from './alta-via-one';
import annapurnaCircuit from './annapurna-circuit';
import caminoDeSantiago from './camino-de-santiago';
import grandRandonneeTwenty from './grande-randonnee-twenty';
import oCircuit from './o-circuit';
import overnightBackpacking from './overnight-backpacking';
import tourDuMontBlanc from './tour-du-mont-blanc';
import westHighlandWay from './west-highland-way';

const data: PackFromDatabase[] = [
  {
    items: overnightBackpacking,
    slug: 'overnight-backpacking',
    title: 'Overnight Backpacking',
    type: 'Spring to Fall',
  },
  {
    items: grandRandonneeTwenty,
    slug: 'grande-randonnee-20',
    title: 'Grande Randonnée 20',
    type: 'Thru-hike',
  },
  {
    items: westHighlandWay,
    slug: 'west-highland-way',
    title: 'West Highland Way',
    type: 'Thru-hike',
  },
  {
    items: oCircuit,
    slug: 'o-circuit',
    title: 'O Circuit',
    type: 'Thru-hike',
  },
  {
    items: annapurnaCircuit,
    slug: 'annapurna-circuit',
    title: 'Annapurna Circuit',
    type: 'Thru-hike',
  },
  {
    items: altaViaOne,
    slug: 'alta-via-1',
    title: 'Alta Via 1',
    type: 'Thru-hike',
  },
  {
    items: tourDuMontBlanc,
    slug: 'tour-du-mont-blanc',
    title: 'Tour du Mont Blanc',
    type: 'Thru-hike',
  },
  {
    items: caminoDeSantiago,
    slug: 'camino-de-santiago',
    title: 'Camino de Santiago',
    type: 'Thru-hike',
  },
];

export default data;
