import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  eyeBrow: string;
  title: string;
  uri: string;
};

const base = 'https://lighterpack.com/r';

const data = [
  {
    eyeBrow: 'Out-and-back',
    title: 'Overnight Backpacking',
    uri: `${base}/j9gvo1`,
  },
  {
    eyeBrow: 'Thru-hike',
    title: 'Grand Randonnée 20',
    uri: `${base}/76sj40`,
  },
  {
    eyeBrow: 'Thru-hike',
    title: 'West Highland Way',
    uri: `${base}/ng8tzb`,
  },
  {
    eyeBrow: 'Thru-hike',
    title: 'O Circuit',
    uri: `${base}/bw0s1t`,
  },
  {
    eyeBrow: 'Thru-hike',
    title: 'Annapurna Circuit',
    uri: `${base}/f6hp0p`,
  },
  {
    eyeBrow: 'Thru-hike',
    title: 'Alta Via 1',
    uri: `${base}/kolkui`,
  },
  {
    eyeBrow: 'Thru-hike',
    title: 'Tour du Mont Blanc',
    uri: `${base}/yi7qss`,
  },
  {
    eyeBrow: 'Thru-hike',
    title: 'Camino de Santiago',
    uri: `${base}/p1be03`,
  },
];

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<ResponseData[]>,
) {
  response.status(200).json(data);
}
