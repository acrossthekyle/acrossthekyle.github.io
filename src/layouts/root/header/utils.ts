export function getRoutePath(
  isOnRoot: boolean,
  base: string,
  route: string,
  pathname: string,
): string {
  if (isOnRoot) {
    return route;
  }

  if (pathname === base) {
    return '/';
  }

  return base;
}
