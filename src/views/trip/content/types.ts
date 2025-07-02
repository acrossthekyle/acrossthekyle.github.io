export type Time = {
  hours: string;
  minutes: string;
};

export type Stage = {
  image: string;
  stats: {
    altitude: string;
    distance: string;
    time: Time;
  };
  title: string;
};

export enum View {
  ImageWithMap = 0,
  ImageOverMap = 1,
  MapWithImage = 2,
}
