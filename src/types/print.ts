export type PrintFromDatabase = {
  date: string;
  image: string;
  paymentLinks: string[];
  snippet: string;
  tags: string[];
  title: string;
  uri: string;
};

export type Print = {
  date: string;
  image: string;
  snippet: string;
  tags: string[];
  title: string;
  uri: string;
};

export type PrintApiResponse = {
  image: string;
  paymentLinks: string[];
  title: string;
};

export type PrintsApiResponse = Print;
