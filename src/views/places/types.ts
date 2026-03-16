export type Data = Array<{
  id: string;
  items: Array<{
    date: string;
    id: string;
    index: string;
    isNew: boolean;
    location: string;
    title: string;
    type: string;
  }>;
  name: string;
  types: Array<{
    count: number;
    name: string;
  }>;
}>;
