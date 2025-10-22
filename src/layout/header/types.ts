export type Route = {
  base: string;
  isActive: boolean;
  text: string;
};

export type Model = {
  isOnRoot: boolean;
  routes: Route[];
};
