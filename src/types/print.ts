export type PrintFromDatabase = {
  date: string;
  image: string;
  location: string;
  paymentLinks: string[];
  snippet: string;
  tags: string[];
  title: string;
  uri: string;
  year: string;
};

export type Print = {
  date: string;
  image: string;
  price: string;
  snippet: string;
  tags: string[];
  title: string;
  uri: string;
};

export type PrintApiResponse = {
  image: string;
  paymentLinks: string[];
  snippet: string;
  title: string;
  uri: string;
};

export type PrintsApiResponse = Print;
