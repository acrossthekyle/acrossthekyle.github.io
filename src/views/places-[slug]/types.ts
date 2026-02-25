export type Data = {
  description: string[];
  images: Array<{
    index: string;
    src: string;
  }>;
  isDestination: boolean;
  label: string;
  location: string;
  slug: string;
  stages: Array<{
    index: string;
    title: string;
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
