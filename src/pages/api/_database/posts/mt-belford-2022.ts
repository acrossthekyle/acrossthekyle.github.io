import type { Posts } from '@/types';

const post: Posts.Raw = {
  date: 'Sept 9th, 2022',
  image: '2022/09/09/f722df6c-2869-4ff0-80f7-37014241e135.jpeg',
  isPrivate: false,
  locationFull: 'Rocky Mountains, Colorado',
  locationShort: 'Colorado',
  route: 'mt-belford-2022/9587988759',
  snippet: `Trail ratings start at Class 1 \u2014 the so-called 'easy' climbs. Mt. Belford wears that badge, but even 'easy' in the Rockies still means business.`,
  stats: {
    gain: 4568,
    miles: 8.26,
    time: [8, 12],
  },
  tags: ['summit', 'day hike'],
  title: 'Pushing myself towards the summit of Mt. Belford',
  titleShort: 'Mt. Belford',
  uri: '/posts/struggling-up-mt-belford',
};

export default post;
