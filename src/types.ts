export type StatFull = {
  label: string;
  value: {
    imperial: string;
    metric: string;
  };
};

export type StatShort = {
  label: string;
  value: string;
  units: string;
};

export type Stat = {
  label: string;
  value: {
    basic: string;
    complex: {
      imperial: string;
      metric: string;
    };
  };
};

export type Data = {
  src: string;
  title: string;
  location: string;
  date: string;
  exif: {
    aperture: null | string;
    camera: string;
    exposure: string;
    fnumber: string;
    focal: number;
    iso: number;
  };
};

export type Album = {
  category: string;
  coordinates: string;
  id: string;
  images: Data[];
  location: string;
  title: string;
  when: string;
};

export type FilterBy = {
  category?: string;
  id?: string;
};
