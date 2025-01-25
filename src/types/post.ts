export type Stage = {
  dateFull: string;
  dateShort: string;
  garmin?: string;
  image: string;
  title: string;
};

export type Post = {
  date: string;
  gear?: string;
  image: string;
  isPrivate: boolean;
  locationFull: string;
  locationShort: string;
  marker: {
    left: string;
    top: string;
  };
  snippet: string;
  stages?: Stage[];
  tags: string;
  title: string;
  titleShort: string;
  uri: string;
};
