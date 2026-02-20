export type Data = {
  groups: Array<{
    id: string;
    items: Array<{
      date: string;
      index: string;
      location: string;
      slug: string;
      title: string;
      type: string;
    }>;
    name: string;
    types: Array<{
      count: number;
      name: string;
    }>;
  }>;
  markers: Array<{
    position: {
      left: string;
      top: string;
    };
    slug: string;
    title: string;
  }>;
};
