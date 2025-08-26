export type Route = {
  base: string;
  isActive: boolean;
  path: string;
  text: string;
};

export type Model = {
  isOnParent: boolean;
  isOnRoot: boolean;
  routes: Route[];
};
