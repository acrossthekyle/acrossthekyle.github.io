export function createClasses(styles: object, values?: string[]) {
  // @ts-expect-error - is ok, todo
  return (values || []).map(key => styles[key]).join(' ');
}
