export type GearItem = {
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
  categories: GearCategory[];
  weightBase: string;
  weightConsumable: string;
  weightTotal: string;
  weightWorn: string;
};

export type Route = [number, number];

export type Stat = {
  value: string;
  units: string
};

export type StageStats = {
  altitude: Stat | null;
  distance: Stat | null;
  time: {
    hours: Stat;
    minutes: Stat;
  } | null;
};

export type StageGPS = {
  latitude: number;
  longitude: number;
};

export type Stage = {
  date: string;
  hasStats: boolean;
  gps: StageGPS | null;
  image: string;
  route: Route[];
  stats: StageStats | null;
  title: string;
};

export type Trip = {
  categories: string[];
  date: string | null;
  gear?: Gear;
  gps: StageGPS[] | null;
  hasGear: boolean;
  hasGps: boolean;
  hasRoutes: boolean;
  id: string;
  image: string;
  label: string;
  length: number;
  location: string;
  routes: [number, number][][] | null;
  stages: Stage[];
  stats: Stat[];
  title: string;
  type: string;
  year: string;
};

export enum View {
  ImageWithMap = 0,
  ImageOverMap = 1,
  MapWithImage = 2,
}

export enum Overlay {
  None = 3,
  Gear = 4,
  List = 5,
}
