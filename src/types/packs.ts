export type PackCategory = {
  category: string;
  items: PackItem[];
  weight: number;
};

export type PackItem = {
  category: string;
  consumable: boolean;
  link: string;
  name: string;
  quantity?: number;
  type: string;
  weight: number;
  worn: boolean;
};

export type Pack = {
  categories: PackCategory[];
  slug: string;
  title: string;
  type: string;
  weightBase: string;
  weightConsumable: string;
  weightTotal: string;
  weightWorn: string;
};

export type ChartProps = {
  categories: PackCategory[];
  onClick: (categoryIndex: number) => void;
  onHover: (categoryName: string) => void;
  units: string;
};

export type PackFromDatabase = {
  items: PackItem[];
  slug: string;
  title: string;
  type: string;
};

export type PacksApiResponse = Pack;
