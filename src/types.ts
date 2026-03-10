export type StatFull = {
  label: string;
  value: {
    imperial: string;
    metric: string;
  };
};

export type StatShort = {
  label: string;
  value: string;
  units: string;
};

export type Stat = {
  label: string;
  value: {
    basic: string;
    complex: {
      imperial: string;
      metric: string;
    };
  };
};
