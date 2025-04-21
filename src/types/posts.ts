export type Breadcrumb = {
  title: string;
  uri: string;
};

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
  author: string;
  date: string;
  gain: number;
  id: string;
  image: string;
  loss: number;
  miles: number;
  next?: string;
  previous?: string;
  parent: string;
  route: string;
  time: string;
  tags: string;
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
