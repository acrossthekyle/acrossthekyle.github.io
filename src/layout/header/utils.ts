export function getRoutePath(
  isOnRoot: boolean,
  base: string,
  pathname: string,
): string {
  if (isOnRoot) {
    return base;
  }

  if (pathname === base) {
    return '/';
  }

  return base;
}
