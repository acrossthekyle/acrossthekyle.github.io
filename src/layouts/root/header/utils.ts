export function getRoutePath(
  isOnRoot: boolean,
  base: string,
  route: string,
  pathname: string,
  parameters: string,
): string {
  if (isOnRoot) {
    return route;
  }

  if (pathname === base) {
    return '/';
  }

  return pathname.includes(base)
    ? `${base}${!!parameters ? '?' + parameters : ''}`
    : base;
}
