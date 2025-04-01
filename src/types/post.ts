import type { Breadcrumb } from './components';

export type Stage = {
  dateFull: string;
  dateShort: string;
  garmin?: string;
  image: string;
  title: string;
};

export type Post = {
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
  tags: string;
  title: string;
  titleShort: string;
  uri: string;
};

export type QueriedPosts = {
  date: string;
  title: string;
  uri: string;
};

export type TaggedPosts = {
  date: string;
  image: string;
  snippet: string;
  tags: string[];
  title: string;
  uri: string;
};

export type PostApiResponse = {
  breadcrumbs?: Breadcrumb[];
  date: string;
  gear: string;
  hasStage: boolean;
  image: string;
  newer?: {
    image: string;
    title: string;
    uri: string;
  };
  older?: {
    image: string;
    title: string;
    uri: string;
  };
  tags: string;
  title: string;
  titleCombined: string;
  uri: string;
};

export type PublicPostsApiResponse = {
  date: string;
  image: string;
  snippet: string;
  tags: string[];
  title: string;
  uri: string;
};

export type PostsMapApiResponse = {
  isPointOfOrigin?: boolean;
  isPrivate: boolean;
  label: string;
  left: string;
  top: string;
  uri?: string;
};

export type PostsRecentApiResponse = {
  date: string;
  image: string;
  title: string;
  uri: string;
};

export type PostsSearchApiResponse = {
  results: QueriedPosts[];
  total: number;
};

export type PostsTaggedApiResponse = {
  results: TaggedPosts[];
  total: number;
};
