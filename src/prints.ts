type Print = {
  image: string;
  mocks?: string[];
  paymentLink: string;
  price: string;
  snippet: string;
  title: string;
  uri: string;
};

const ITEMS: Print[] = [
  {
    image: 'shop/prints/6a35f76e-56a2-4e08-8f06-8efdb818981e.jpeg',
    mocks: [
      'shop/prints/mocks/0698f52f-7d2d-4324-be36-98376ead7acf.jpg',
      'shop/prints/mocks/457d14a7-f546-4d5b-af19-0a05cccb8e04.jpg',
    ],
    paymentLink: 'https://buy.stripe.com/test_bIYbMC6lc3BBadyaEH',
    price: '100',
    snippet: `A sunrise in the Himalayan mountains of Nepal taken from Annapurna Basecamp after finishing the Annapurna Circuit a couple of days earlier.`,
    title: 'Annapurna Basecamp Sunrise Print',
    uri: '/shop/prints/annapurna-basecamp-sunrise',
  },
  {
    image: 'shop/prints/ee93e3d9-fd43-4d86-a01a-2c81f4cf5ef5.jpeg',
    paymentLink: 'https://buy.stripe.com/test_bIYbMC6lc3BBadyaEH',
    price: '100',
    snippet: `Morning on the second day of the "O" Circuit of Patagonia and I captured this picture of the mountains with tall grasses blowing in the wind.`,
    title: 'Patagonia Serón Print',
    uri: '/shop/prints/patagonia-seron',
  },
  {
    image: 'shop/prints/d95d97ce-2886-402a-85c7-dff926697bfd.jpeg',
    paymentLink: 'https://buy.stripe.com/test_bIYbMC6lc3BBadyaEH',
    price: '100',
    snippet: `Taken on the second to last day of the Tour du Mont Blanc behind a mountain lake with the Mont Blanc range in the background.`,
    title: 'Mont Blanc Mountain Lake Print',
    uri: '/shop/prints/mont-blanc-mountain-lake',
  },
  {
    image: 'shop/prints/4d76b636-952a-44f0-afdd-947940c4e434.jpeg',
    paymentLink: 'https://buy.stripe.com/test_bIYbMC6lc3BBadyaEH',
    price: '100',
    snippet: `I captured this picture of the morning sunrise light saturating the clouds around this mountain after a stormy night on the "O" Circuit in Chile.`,
    title: 'Patagonia Sunrise Print',
    uri: '/shop/prints/patagonia-sunrise',
  },
  {
    image: 'shop/prints/bc6b66bb-28e0-4610-bf3a-43c1966c1762.jpeg',
    paymentLink: 'https://buy.stripe.com/test_bIYbMC6lc3BBadyaEH',
    price: '100',
    snippet: `The Dolomite mountains in northern Italy have some of the most unique formations I've ever seen, and this one is no exception.`,
    title: 'Alta Via Mountain Throne Print',
    uri: '/shop/prints/alta-via-mountain-throne',
  },
  {
    image: 'shop/prints/77a17efe-f203-4de9-b32f-6fc272b40109.jpeg',
    paymentLink: 'https://buy.stripe.com/test_bIYbMC6lc3BBadyaEH',
    price: '100',
    snippet: `A long day, heading to Fromista along the Camino de Santiago.`,
    title: 'Camino de Santiago Fromista Print',
    uri: '/shop/prints/camino-de-santiago-fromista',
  },
  {
    image: 'shop/prints/0ff34736-949f-4981-b339-06b6d304ba51.jpeg',
    paymentLink: 'https://buy.stripe.com/test_bIYbMC6lc3BBadyaEH',
    price: '100',
    snippet: `One of the most beautiful sights in nature when the clouds form low to the ground, and you are hiking high above them.`,
    title: 'Cloud Inversion in Corsica Print',
    uri: '/shop/prints/cloud-inversion-in-corsica',
  },
  {
    image: 'shop/prints/24f59aee-4b5a-4857-a118-4a16f6de8927.jpeg',
    paymentLink: 'https://buy.stripe.com/test_bIYbMC6lc3BBadyaEH',
    price: '100',
    snippet: `One of the seven ancient wonders of the world, the pyramids in Egypt at the Giza Plateau did not dissapoint`,
    title: 'Pyramid of Egypt Print',
    uri: '/shop/prints/pyramid-of-egypt',
  },
];

const prints = {
  items: ITEMS,
  getArray: function () {
    return this.items;
  },
  getById: function (id: string) {
    return (
      this.items.find(({ uri }) => uri === `/shop/prints/${id}`) ?? undefined
    );
  },
};

export default prints;
