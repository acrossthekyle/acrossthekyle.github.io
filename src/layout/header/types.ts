export type Route = {
  base: string;
  isActive: boolean;
  label: string;
  path: string;
  text: string;
};

export type Model = {
  isOnRoot: boolean;
  routes: Route[];
};
