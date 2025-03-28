export type PrintFromDatabase = {
  image: string;
  paymentLinks: string[];
  slug: string;
  snippet: string;
  title: string;
};

export type Print = {
  image: string;
  slug: string;
  snippet: string;
  title: string;
  uri: string;
};

export type PrintApiResponse = {
  image: string;
  paymentLinks: string[];
  title: string;
};

export type PrintsApiResponse = Print;
