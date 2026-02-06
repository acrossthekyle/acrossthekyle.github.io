export type Gpx = [number, number, number][];

export type GearItem = {
  name: string[];
  weight: number;
  link: string;
};

export type GearCategory = {
  title: string;
  items: GearItem[];
  weight: string;
};

export type Gear = {
  categories: GearCategory[];
  weightBase: string;
};

export type StatFull = {
  label: string;
  value: {
    imperial: string;
    metric: string;
  };
  units: {
    imperial: {
      full: string;
      abbreviated: string;
    };
    metric: {
      full: string;
      abbreviated: string;
    };
  };
};

export type StatShort = {
  label: string;
  value: string;
  units: string;
};

export type Stats = {
  distance: StatFull | null;
  gain: StatFull | null;
  loss: StatFull | null;
  max: StatFull | null;
  time: StatShort | null;
};
