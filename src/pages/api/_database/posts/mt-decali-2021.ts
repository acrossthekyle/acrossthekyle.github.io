import type { Posts } from '@/types';

const post: Posts.Raw = {
  date: 'Sept 9th, 2021',
  image: '2021/09/09/1e11830d-f313-4f15-85cf-a7dc23357b5d.jpeg',
  isPrivate: false,
  locationFull: 'Rocky Mountains, Colorado',
  locationShort: 'Colorado',
  route: 'mt-decali-2021/7483565561',
  snippet: `It's a rare gift when a single trail lets you tag multiple summits in just one day \u2014 and the Decalibron is one of those rare, high-altitude gems.`,
  stats: {
    gain: 3068,
    loss: 3192,
    miles: 6.5,
    time: [6, 42],
  },
  tags: ['summit', 'day hike'],
  title: 'Summiting three mountain peaks before lunch',
  titleShort: 'DeCaLi',
  uri: '/posts/summiting-three-mountains-before-lunch',
};

export default post;
