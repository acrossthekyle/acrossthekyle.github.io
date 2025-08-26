export function decorateLink(path: string, searchParameters: string | null) {
  if (!!searchParameters) {
    return `${path}?${searchParameters}`;
  }

  return path;
}
