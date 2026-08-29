export type Trail = Array<{
  coordinates: number[];
  elevation: number;
}>;

export type Image = {
  elevation: number;
  src: string;
  thumb: string;
  title: string;
  when: string;
};

export type TimelineData = {
  distance?: number;
  elevation?: number;
  gain?: number;
  loss?: number;
  summit?: number;
  time?: number;
};

export type Timeline = {
  label: string;
  title: string;
  data?: TimelineData;
};

export type Landmark = {
  coordinates: string;
  label: string;
  title: string;
  orientation: string;
  group?: string;
};

type Base = {
  category: string;
  country: string;
  region: string;
  title: string;
};

export type Travel = Base & {
  id: string;
  year: string;
};

export type Data = Base & {
  coordinates: string;
  cover: string;
  header: string;
  notes: string[];
  when: string;
};
