export type CartClient = {
  colorId: string;
  frameId: string;
  hash: string;
  itemId: string;
  quantity: number;
  sizeId: string;
};

export type CartServer = {
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
