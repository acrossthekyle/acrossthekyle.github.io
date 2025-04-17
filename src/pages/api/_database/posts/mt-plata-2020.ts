import type { Posts } from '@/types';

const post: Posts.Raw = {
  date: 'Sept 4th, 2020',
  image: '2020/09/04/e773dc33-82a1-48c1-b481-4eb09d736140.jpeg',
  isPrivate: false,
  locationFull: 'Rocky Mountains, Colorado',
  locationShort: 'Colorado',
  route: 'mt-plata-2020/q2jmaiKdwi',
  snippet: `After a restless night and a seemingly endless trek through thick, shadowy woods, the trail suddenly broke open, revealing a towering wall of rock, its switchbacks winding like a serpent toward the sky.`,
  stats: {
    gain: 4500,
    miles: 9.25,
    time: [10, 30],
  },
  tags: ['summit', 'day hike'],
  title: 'Navigating ridges and switchbacks on La Plata Peak in Colorado',
  titleShort: 'La Plata Peak',
  uri: '/posts/la-plata-peak-switchback-alley',
};

export default post;
