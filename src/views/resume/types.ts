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
    description: string;
    position: string;
    title: string[];
  }>;
  skills: Array<{
    name: string;
    percent: number;
  }>;
};
