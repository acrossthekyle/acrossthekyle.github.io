import type { Store } from '@/types';

const colors = [
  {
    id: 'a97e52fa-1396-4b66-80ff-da9ea357f7f9',
    value: 'Black',
  },
  {
    id: '116d82ce-e0d3-4788-836a-db1976333954',
    value: 'White',
  },
];

const sizes = [
  {
    id: '357a9eb0-c04d-4562-a069-9d4705c5f9ab',
    value: '5" x 7"',
  },
  {
    id: '0dbd49d6-0ca8-43fb-a81c-073eafcd8a07',
    value: '8" x 10"',
  },
  {
    id: 'ee5072a2-af1f-48f7-9ff8-f953983596dc',
    value: '11" x 14"',
  },
  {
    id: 'e6e4d3a5-d647-4f15-81cb-4af384f5f400',
    value: '12" x 16"',
  },
  {
    id: 'ae223ec1-8990-4d9f-a1fe-190f2089aee5',
    value: '12" x 18"',
  },
  {
    id: '08753965-29cc-4e3d-aa3b-dddcd1a3cc17',
    value: '16" x 20"',
  },
  {
    id: 'abd95ac6-e4e7-457a-98da-e7fa700fd9a7',
    value: '18" x 24"',
  },
];

const styles = [
  {
    id: 'e051f97e-d570-494e-b80e-046c1154a661',
    colors: [],
    price: '100.00',
    sizes,
    value: 'None',
  },
  {
    id: '43e257ff-2211-45ec-9e9b-7a54f1f83862',
    colors,
    price: '185.00',
    sizes: sizes.slice(2),
    value: 'Framed',
  },
  {
    id: 'e6c1ad13-31f2-43f6-8ea4-158803370583',
    colors,
    price: '215.00',
    sizes: sizes.slice(3),
    value: 'Framed with Mat',
  },
];

export const store: Store.Item[] = [
  {
    id: 'eb74f54e-a15c-45fd-a7ff-b2602ab7b36f',
    image: 'shop/prints/ad8f9626-62ba-4bfd-8675-c3531266631a.jpeg',
    snippet: `The gateway to Conca, and the beginning of the end, on the last day of the south-bound GR20.`,
    styles,
    title: 'Stone Gateway',
    uri: '/store/stone-gateway',
  },
  {
    id: '7fee8a89-60ed-47bb-ae70-8da5f7de2e79',
    image: 'shop/prints/6a35f76e-56a2-4e08-8f06-8efdb818981e.jpeg',
    snippet: `Sunrise in the Himalayas over the iconic Machhapuchhare (fishtail) mountain taken from Annapurna Basecamp.`,
    styles,
    title: 'Machhapuchhare Sunrise',
    uri: '/store/machhapuchhare-sunrise',
  },
  {
    id: '7eb766e5-39cc-45f5-b96e-046b12eaf20c',
    image: 'shop/prints/ee93e3d9-fd43-4d86-a01a-2c81f4cf5ef5.jpeg',
    snippet: `A bright morning on the "O" Circuit of Patagonia at Serón camp.`,
    styles,
    title: 'Fields of Serón',
    uri: '/store/fields-of-seron',
  },
  {
    id: 'e712efd9-2bc3-4469-8664-dec234a3123f',
    image: 'shop/prints/d95d97ce-2886-402a-85c7-dff926697bfd.jpeg',
    snippet: `A mountain lake in France with the Mont Blanc range in the background.`,
    styles,
    title: 'Mountain Lake',
    uri: '/store/mountain-lake',
  },
  {
    id: '8f72018e-77b6-4579-b81f-69c997f1ba62',
    image: 'shop/prints/4d76b636-952a-44f0-afdd-947940c4e434.jpeg',
    snippet: `The morning sunrise light saturating the clouds around a mountain after a stormy night on the "O" Circuit in Patagonia.`,
    styles,
    title: 'Windy Morning',
    uri: '/store/windy-morning',
  },
  {
    id: '5cdabc66-91ba-4959-82a3-cee356248d6d',
    image: 'shop/prints/bc6b66bb-28e0-4610-bf3a-43c1966c1762.jpeg',
    snippet: `A unique landscape formation in the Dolomite mountains of northern Italy.`,
    styles,
    title: 'Dolomites',
    uri: '/store/dolomites',
  },
  {
    id: 'd94e7151-859a-4482-8b7b-41933dd7f1c3',
    image: 'shop/prints/77a17efe-f203-4de9-b32f-6fc272b40109.jpeg',
    snippet: `A long day, heading to Fromista along the Camino de Santiago.`,
    styles,
    title: 'The Way',
    uri: '/store/the-way',
  },
  {
    id: '67db9d76-1f7c-4f01-9665-a5f973fc07e1',
    image: 'shop/prints/0ff34736-949f-4981-b339-06b6d304ba51.jpeg',
    snippet: `Low clouds forming below the trail in the Corsican mountains.`,
    styles,
    title: 'Cloud Inversion',
    uri: '/store/cloud-inversion',
  },
  {
    id: '1b9fbf08-775b-4040-8fdd-1e69fbbeec38',
    image: 'shop/prints/24f59aee-4b5a-4857-a118-4a16f6de8927.jpeg',
    snippet: `One of the seven ancient wonders of the world at the Giza Plateau.`,
    styles,
    title: 'Pyramid',
    uri: '/store/pyramid',
  },
];
