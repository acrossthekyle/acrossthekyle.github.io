type Colors = {
  id: string;
  value: string;
};

type Sizes = {
  id: string;
  value: string;
};

type Styles = {
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
