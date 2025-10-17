export type Route = {
  base: string;
  isActive: boolean;
  text: string;
};

export type Model = {
  isOnParent: boolean;
  isOnRoot: boolean;
  routes: Route[];
};
