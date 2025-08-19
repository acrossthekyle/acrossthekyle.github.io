export function decorateLink(path: string, filter: string | null) {
  if (!!filter) {
    return `${path}?filter=${filter}`;
  }

  return path;
}
