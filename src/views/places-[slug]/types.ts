export type Data = {
  description: string[];
  images: Array<{
    index: string;
    location: string;
    src: string;
    title: string;
  }>;
  label: string;
  location: string;
  position: {
    left: string;
    top: string;
  };
  slug: string;
  stages: Array<{
    date: string;
    index: string;
    stats: Array<{ label: string; value: string; }>;
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
