export type Route = {
  base: string;
  isActive: boolean;
  path: string;
  text: string;
};

export type Model = {
  handleOnBack: () => void;
  isOnParent: boolean;
  isOnRoot: boolean;
  routes: Route[];
};
