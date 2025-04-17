import type { Posts } from '@/types';

const post: Posts.Raw = {
  date: 'Sept 7th, 2021',
  image: '2021/09/07/9c414ac6-cbce-4dd4-9e8a-ac3d36b9e833.jpeg',
  isPrivate: false,
  locationFull: 'Rocky Mountains, Colorado',
  locationShort: 'Colorado',
  route: 'mt-shavano-2021/ddXNZnuiVu',
  snippet: `The climb was punishing \u2014 6,000 feet of relentless elevation gain, and just when things couldn't get worse, our water ran dry. Every step after that felt like a battle.`,
  stats: {
    gain: 4500,
    miles: 9.5,
    time: [8, 22],
  },
  tags: ['summit', 'day hike'],
  title: 'Running out of water while on Mt. Shavano',
  titleShort: 'Mt. Shavano',
  uri: '/posts/running-dry-on-mt-shavano',
};

export default post;
