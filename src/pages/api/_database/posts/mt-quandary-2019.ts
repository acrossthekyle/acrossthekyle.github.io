import type { Posts } from '@/types';

const post: Posts.Raw = {
  date: 'Sept 1st, 2019',
  image: '2019/09/01/1cd21f68-72d8-457d-8558-d98b63755d8c.jpeg',
  isPrivate: false,
  locationFull: 'Rocky Mountains, Colorado',
  locationShort: 'Colorado',
  route: 'mt-quandary-2019/D0LV2yKZ17',
  snippet: `Most of the trail was shrouded in dense woods, where the path twisted upward in a series of rock-carved staircases, each switchback feeling like a step clossr into the mountain's heart.`,
  stats: {
    gain: 3450,
    miles: 6.75,
    time: [5, 40],
  },
  tags: ['summit', 'day hike'],
  title: 'Discovering a new outdoor passion on Quandary Peak',
  titleShort: 'Quandary Peak',
  uri: '/posts/quandary-peak',
};

export default post;
