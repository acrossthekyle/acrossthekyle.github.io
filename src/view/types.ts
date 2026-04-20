export type Data = {
  src: string;
  title: string;
  location: string;
  date: string;
  exif: {
    aperture: string;
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
