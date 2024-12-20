import { Print } from '@/types/print';

const STRIPE_BASE = 'https://buy.stripe.com';

const PAYMENT_URL_BASE = STRIPE_BASE;

const ITEMS: Print[] = [
  {
    image: 'shop/prints/ad8f9626-62ba-4bfd-8675-c3531266631a.jpeg',
    mocks: [],
    paymentLinks: [
      `${PAYMENT_URL_BASE}/8wM4hifxAdNKfMk5kI`,
      `${PAYMENT_URL_BASE}/8wM5lm99caBy2Zy5kJ`,
      `${PAYMENT_URL_BASE}/6oE9BC714gZWbw49B0`,
    ],
    snippet: `The gateway to Conca on the last day of my 13 day southbound GR20 adventure, and the end of a beatifuly unique experience.`,
    title: 'GR20 Gateway in Corsica Print',
    uri: '/shop/prints/gr20-gateway-in-corsica',
  },

  {
    image: 'shop/prints/6a35f76e-56a2-4e08-8f06-8efdb818981e.jpeg',
    mocks: [],
    paymentLinks: [
      `${PAYMENT_URL_BASE}/eVa8xy1GK5he57GfYY`,
      `${PAYMENT_URL_BASE}/cN25lm99cbFC6bK001`,
      `${PAYMENT_URL_BASE}/cN2bJKgBEcJG7fO6oq`,
    ],
    snippet: `A sunrise in the Himalayan mountains of Nepal taken from Annapurna Basecamp after finishing the Annapurna Circuit a couple of days earlier.`,
    title: 'Annapurna Basecamp Sunrise Print',
    uri: '/shop/prints/annapurna-basecamp-sunrise',
  },

  {
    image: 'shop/prints/ee93e3d9-fd43-4d86-a01a-2c81f4cf5ef5.jpeg',
    mocks: [],
    paymentLinks: [
      `${PAYMENT_URL_BASE}/fZe7tu714dNKas07sv`,
      `${PAYMENT_URL_BASE}/9AQ6pqadgcJG0Rq004`,
      `${PAYMENT_URL_BASE}/6oEdRS5X04dacA84gl`,
    ],
    snippet: `Morning on the second day of the "O" Circuit of Patagonia and I captured this picture of the mountains with tall grasses blowing in the wind.`,
    title: 'Patagonia Serón Print',
    uri: '/shop/prints/patagonia-seron',
  },

  {
    image: 'shop/prints/d95d97ce-2886-402a-85c7-dff926697bfd.jpeg',
    mocks: [],
    paymentLinks: [
      `${PAYMENT_URL_BASE}/14k29afxAgZWgQoeV0`,
      `${PAYMENT_URL_BASE}/3cs29aadg10Y6bK5kr`,
      `${PAYMENT_URL_BASE}/14k012fxAaBygQo6ow`,
    ],
    snippet: `Taken on the second to last day of the Tour du Mont Blanc behind a mountain lake with the Mont Blanc range in the background.`,
    title: 'Mont Blanc Mountain Lake Print',
    uri: '/shop/prints/mont-blanc-mountain-lake',
  },

  {
    image: 'shop/prints/4d76b636-952a-44f0-afdd-947940c4e434.jpeg',
    mocks: [],
    paymentLinks: [
      `${PAYMENT_URL_BASE}/bIY012dpscJG0Rq4gp`,
      `${PAYMENT_URL_BASE}/dR60122KO5he0Rq5ku`,
      `${PAYMENT_URL_BASE}/bIY4hifxA6li9nW8wH`,
    ],
    snippet: `I captured this picture of the morning sunrise light saturating the clouds around this mountain after a stormy night on the "O" Circuit in Chile.`,
    title: 'Patagonia Sunrise Print',
    uri: '/shop/prints/patagonia-sunrise',
  },

  {
    image: 'shop/prints/bc6b66bb-28e0-4610-bf3a-43c1966c1762.jpeg',
    mocks: [],
    paymentLinks: [
      `${PAYMENT_URL_BASE}/9AQaFGclo10Y8jSaEQ`,
      `${PAYMENT_URL_BASE}/3cs5lm2KOgZW43C7sF`,
      `${PAYMENT_URL_BASE}/cN27tu5X09xu43CeV8`,
    ],
    snippet: `The Dolomite mountains in northern Italy have some of the most unique formations I've ever seen, and this one is no exception.`,
    title: 'Alta Via Dolomites Print',
    uri: '/shop/prints/alta-via-mountain-throne',
  },

  {
    image: 'shop/prints/77a17efe-f203-4de9-b32f-6fc272b40109.jpeg',
    mocks: [],
    paymentLinks: [
      `${PAYMENT_URL_BASE}/9AQ6pq4SW8tqcA87sH`,
      `${PAYMENT_URL_BASE}/4gw156adg396fMk7sI`,
      `${PAYMENT_URL_BASE}/9AQ156etw7pmeIg9AR`,
    ],
    snippet: `A long day, heading to Fromista along the Camino de Santiago.`,
    title: 'Camino de Santiago Fromista Print',
    uri: '/shop/prints/camino-de-santiago-fromista',
  },

  {
    image: 'shop/prints/0ff34736-949f-4981-b339-06b6d304ba51.jpeg',
    mocks: [],
    paymentLinks: [
      `${PAYMENT_URL_BASE}/bIY8xy5X0252fMkbJ0`,
      `${PAYMENT_URL_BASE}/6oEcNOetw6li8jS8wP`,
      `${PAYMENT_URL_BASE}/cN26pq2KO10Y57GeVe`,
    ],
    snippet: `One of the most beautiful sights in nature when the clouds form low to the ground, and you are hiking high above them.`,
    title: 'Cloud Inversion in Corsica Print',
    uri: '/shop/prints/cloud-inversion-in-corsica',
  },

  {
    image: 'shop/prints/24f59aee-4b5a-4857-a118-4a16f6de8927.jpeg',
    mocks: [],
    paymentLinks: [
      `${PAYMENT_URL_BASE}/8wMbJK4SWcJGdEc5kF`,
      `${PAYMENT_URL_BASE}/28oaFG5X0fVS57G6oK`,
      `${PAYMENT_URL_BASE}/fZedRS5X02529nWdRd`,
    ],
    snippet: `One of the seven ancient wonders of the world, the pyramids in Egypt at the Giza Plateau did not dissapoint`,
    title: 'Pyramid of Egypt Print',
    uri: '/shop/prints/pyramid-of-egypt',
  },
];

const prints = {
  items: ITEMS,
  getItems: function () {
    return [...this.items];
  },
  getById: function (id: string) {
    return (
      [...this.items].find(({ uri }) => uri === `/shop/prints/${id}`) ??
      undefined
    );
  },
  getRelated: function (id: string) {
    const filtered = [...this.items].filter(
      ({ uri }) => uri !== `/shop/prints/${id}`,
    );
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, 3);
  },
};

export default prints;
