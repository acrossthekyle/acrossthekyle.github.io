import type { Posts } from '@/types';

const post: Posts.Raw = {
  date: 'Aug 31st, 2019',
  image: '2019/08/31/8cac350f-f71e-4d78-b394-05ab790f1c1a.jpeg',
  isPrivate: false,
  locationFull: 'Rocky Mountains, Colorado',
  locationShort: 'Colorado',
  marker: {
    left: '12%',
    top: '28%',
  },
  snippet: `After summoning every bit of courage, I set off for Colorado, ready to take on my first 14er \u2014 an intimidating peak rising over 14,000 feet into the sky.`,
  tags: ['summit', 'day hike'],
  title: 'Trying something new: summitting a mountain at 14,000 feet',
  titleShort: 'Mt. Elbert',
  uri: '/posts/summiting-my-first-mountain',
};

export default post;
