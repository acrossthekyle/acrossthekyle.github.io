type GearItem = {
  category: string;
  type: string;
  name: string;
  weight: number;
  worn: boolean;
  consumable: boolean;
  link: string;
};

export type GearCategory = {
  category: string;
  items: GearItem[];
  weight: string;
};

export type Gear = {
  categories: GearCategory[],
  weightBase: string;
  weightConsumable: string;
  weightTotal: string;
  weightWorn: string;
};

type TripStatTimeValue = {
  hours: string;
  minutes: string;
};

type TripStatDaysValue = {
  days: number;
};

type TripStat = {
  type: string;
  value: string | TripStatTimeValue | TripStatDaysValue;
};

type TripStage = {
  id: string;
  title: string;
  date: string;
  image: string;
  elevation: string[];
  route: [number, number][];
  stats: TripStat[];
};

export type Trip = {
  gear: Gear,
  image: string;
  label: string;
  location: string;
  stages: TripStage[];
  stats: TripStat[];
  title: string;
  type: string;
  year: string;
};
