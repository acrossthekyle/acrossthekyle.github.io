export type Data = {
  description: string[];
  images: Array<{
    index: string;
    src: string;
  }>;
  location: string;
  slug: string;
  stages: Array<{
    date: string;
    index: string;
  }>;
  stats: Array<{
    label: string;
    value: string;
  }>;
  title: string;
  type: string;
  total: string;
  year: string;
};
