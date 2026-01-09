function clean(string) {
  return string
    .replace('false', '')
    .replace('undefined', '')
    .replace(/(\r\n|\n|\r)/gm, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export const padding = {
  full: `
    p-6

    base:p-8
    hecto:p-12
    kilo:p-16
  `,
  x: `
    px-6

    base:px-8
    hecto:px-12
    kilo:px-16
  `,
  y: `
    py-6

    base:py-8
    hecto:py-12
    kilo:py-16
  `,
  t: `
    pt-6

    base:pt-8
    hecto:pt-12
    kilo:pt-16
  `,
};

export default function tw(styles) {
  if (typeof styles === 'string') {
    return clean(styles);
  }

  const cloned = { ...styles };

  for (const style in styles) {
    if (typeof styles[style] === 'string') {
      cloned[style] = clean(styles[style]);
    } else if (typeof styles[style] === 'object') {
      cloned[style] = clean(styles[style].join(' '));
    } else {
      cloned[style] = styles[style];
    }
  }

  return cloned;
}
