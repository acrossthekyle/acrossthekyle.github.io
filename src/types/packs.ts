export enum Units {
  Imperial = 'imperial',
  Metric = 'metric',
}

export type Item = {
  category: string;
  consumable: boolean;
  link: string;
  name: string;
  quantity?: number;
  type: string;
  weight: number;
  worn: boolean;
};

export type Category = {
  category: string;
  items: Item[];
  weight: string;
};

export type Raw = {
  date: string;
  id: string;
  file: string;
  title: string;
  type: string;
};

export type Pack = {
  categories: Category[];
  date: string;
  id: string;
  title: string;
  type: string;
  weightBase: string;
  weightConsumable: string;
  weightTotal: string;
  weightWorn: string;
};
