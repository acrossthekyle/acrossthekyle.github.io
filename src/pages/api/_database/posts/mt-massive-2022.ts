import type { Posts } from '@/types';

const post: Posts.Raw = {
  date: 'Sept 11th, 2022',
  image: '2022/09/11/b74f68ae-d627-4a89-9122-fbc75562e59d.jpeg',
  isPrivate: false,
  locationFull: 'Rocky Mountains, Colorado',
  locationShort: 'Colorado',
  route: 'mt-massive-2022/9588164555',
  snippet: `The trail eased me in so effortlessly, it was almost easy to forget I was ascending one of the Rocky Mountains' true giants \u2014 their second-highest summit.`,
  stats: {
    gain: 4491,
    miles: 13.54,
    time: [7, 37],
  },
  tags: ['summit', 'day hike'],
  title: 'Summitting the second highest peak in the Rockies',
  titleShort: 'Mt. Massive',
  uri: '/posts/the-second-highest-peak-in-the-rockies',
};

export default post;
