export type Breadcrumb = {
  title: string;
  uri: string;
};

export type Stats = {
  gain: number;
  loss: number;
  miles: number;
  time: number | number[];
};

export type Route = {
  route: string;
  start: string;
  stop: string;
};

export type Stage = {
  author: string;
  categories: string;
  date: string;
  gain: number;
  id: string;
  image?: string;
  loss: number;
  miles: number;
  next?: string;
  previous?: string;
  parent: string;
  route: string;
  time: number | number[];
  title: string;
  uri?: string;
  readingTime: number;
  snippet?: string;
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

export type Marker = {
  left: string;
  top: string;
};

export type Post = {
  author: string;
  categories: string[];
  date: string;
  id: string;
  image: string;
  location: string;
  marker?: Marker;
  next?: string;
  newer?: Newer;
  older?: Older;
  previous?: string;
  route?: Route;
  snippet: string;
  stats?: Stats;
  title: string;
  uri: string;
  readingTime: number;
};
