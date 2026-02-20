export type Data = {
  count: number;
  id: string;
  items: Array<{
    base: string;
    date: string;
    slug: string;
    title: string;
  }>;
  name: string;
};
