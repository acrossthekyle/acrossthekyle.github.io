export type Props = {
  src: string;
};

export type Exif = {
  exif: {
    image: {
      Model: string;
    };
    exif: {
      ISO: string;
      FocalLengthIn35mmFormat: string;
      ExposureCompensation: string;
      FNumber: number;
      ApertureValue: number;
    };
  };
};
