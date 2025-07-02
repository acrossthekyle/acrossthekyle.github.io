export type Trip = {
  id: string;
  image: string;
  label: string;
  location: string;
  stats: {
    altitude: string;
    distance: string;
    time: string;
  };
  title: string;
  type: string;
  year: string;
};
