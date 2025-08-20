export type Route = {
  base: string;
  isActive: boolean;
  path: string;
  text: string;
};

export type Breadcrumb = {
  name: string;
  path: string;
};

export type Model = {
  breadcrumbs: Breadcrumb[];
  isOnParent: boolean;
  isOnRoot: boolean;
  routes: Route[];
};
