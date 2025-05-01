export type Breadcrumb = {
  text: string;
  uri?: string;
};

export type MasonryItem = {
  categories: string[];
  date: string;
  image: string;
  snippet?: string;
  title: string;
  uri: string;
  readingTime: number;
};

export type Marker = {
  isPointOfOrigin?: boolean;
  isPrivate?: boolean;
  label?: string;
  left: string;
  top: string;
  uri?: string;
};

export type TimelineSegment = {
  cta?: string;
  eyeBrow: string;
  title: string;
  uri?: string;
};
