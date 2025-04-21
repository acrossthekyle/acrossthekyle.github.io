import type { Breadcrumb } from './components';

export type Stats = {
  gain?: number;
  loss?: number;
  miles: number;
  time?: number | number[];
};

export type Route = {
  route: [number, number][];
  start: string;
  stop: string;
};

export type Stage = {
  cta: string;
  eyeBrow: string;
  isReadOnly?: boolean;
  title: string;
  uri: string;
};

export type Queried = {
  date: string;
  title: string;
  uri: string;
};

export type Newer = {
  image: string;
  title: string;
  uri: string;
};

export type Older = {
  image: string;
  title: string;
  uri: string;
};

export type Post = {
  author: string;
  date: string;
  id: string;
  image: string;
  location: string;
  marker?: string;
  next?: string;
  previous?: string;
  snippet: string;
  stages?: Stage[];
  tags: string[];
  title: string;
  uri: string;
};
