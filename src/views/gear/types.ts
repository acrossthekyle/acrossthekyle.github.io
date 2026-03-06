export type Data = {
  count: number;
  id: string;
  items: Array<{
    base: {
      imperial: string;
      metric: string;
    };
    date: string;
    slug: string;
    title: string;
  }>;
  name: string;
};
