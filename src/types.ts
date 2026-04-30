export type Stat = {
  imperial: string;
  metric: string;
};

export type Data = {
  src: string;
  title: string;
  location: string;
  date: string;
  elevation: Stat;
  notes: string | string[];
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
  cover: string;
  id: string;
  images: Data[];
  location: string;
  notes: string[];
  position: string[];
  tags: string[];
  title: string;
  when: string;
};
