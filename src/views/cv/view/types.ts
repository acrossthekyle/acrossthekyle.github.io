export type Data = {
  education: Array<{
    degree: string;
    school: string;
    graduation: string;
  }>;
  history: Array<{
    date: {
      start: string;
      end: string;
    };
    industry: string;
    location: string;
    overview: string;
    position: string;
    responsibilities: string[];
    title: string[];
    website: string | null;
  }>;
  skills: Array<{
    name: string;
    percent: number;
  }>;
};
