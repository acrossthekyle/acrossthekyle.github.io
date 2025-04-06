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
  weight: number;
};

export type Raw = {
  items: Item[];
  slug: string;
  title: string;
  type: string;
};

export type Pack = {
  categories: Category[];
  slug: string;
  title: string;
  type: string;
  weightBase: string;
  weightConsumable: string;
  weightTotal: string;
  weightWorn: string;
};

export type Chart = {
  categories: Category[];
  onClick: (index: number) => void;
  onHover: (value: string) => void;
  units: Units;
};
