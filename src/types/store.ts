export type Data = {
  colorId: string;
  frameId: string;
  hash: string;
  itemId: string;
  quantity: number;
  sizeId: string;
};

export type Cart = {
  color: string | null;
  frame: string;
  image: string;
  mat: string | null;
  name: string;
  price: string;
  quantity: number;
  size: string;
  total: string;
  uri: string;
};

type Colors = {
  id: string;
  value: string;
};

type Sizes = {
  id: string;
  value: string;
};

export type Styles = {
  id: string;
  colors: Colors[];
  price: string;
  sizes: Sizes[];
  value: string;
};

export type Item = {
  id: string;
  image: string;
  styles: Styles[];
  snippet: string;
  title: string;
  uri: string;
};
