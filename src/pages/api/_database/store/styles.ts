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

const data = [
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

export default data;
