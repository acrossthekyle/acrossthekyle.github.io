import type { Breadcrumb } from './components';

export type Stats = {
  gain?: number;
  loss?: number;
  miles: number;
  time?: number[];
};

export type Route = {
  id: string;
  start: string;
  stop: string;
};

export type Stage = {
  dateFull: string;
  dateShort: string;
  garmin?: string;
  image: string;
  route?: string;
  stats?: Stats;
  title: string;
};

export type Queried = {
  date: string;
  title: string;
  uri: string;
};

export type Raw = {
  date: string;
  gear?: string;
  image: string;
  isPrivate: boolean;
  locationFull: string;
  locationShort: string;
  marker?: {
    left: string;
    top: string;
  };
  snippet: string;
  stages?: Stage[];
  tags: string[];
  title: string;
  titleShort: string;
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
  breadcrumbs?: Breadcrumb[];
  date: string;
  pack?: string;
  hasStage: boolean;
  image: string;
  newer?: Newer;
  older?: Older;
  snippet?: string;
  route?: Route;
  stats?: Stats;
  tags: string[];
  title: string;
  titleCombined: string;
  uri: string;
};
