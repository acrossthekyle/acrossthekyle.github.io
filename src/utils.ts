export function pad(index: number, padding: number = 2) {
  return String(index).padStart(padding, '0');
};

export function image(id: string, folder: string, extension: string = 'jpeg') {
  return [
    'https://ik.imagekit.io/acrossthekyle/uploads',
    folder,
    `${id}.${extension}`,
  ].filter(Boolean).join('/');
};
