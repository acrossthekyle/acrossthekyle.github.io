export type Breadcrumb = {
  text: string;
  uri?: string;
};

export type MasonryItem = {
  date?: string;
  image: string;
  price?: string;
  snippet?: string;
  tags?: string[];
  title: string;
  uri: string;
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
