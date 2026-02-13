export type Data = {
  date: string;
  description: string[];
  hasGear: boolean;
  label: string;
  location: string;
  position: {
    left: string;
    top: string;
  };
  slug: string;
  stages: Array<{
    image: string;
    index: string;
  }>;
  title: string;
  type: string;
  total: number;
};
