import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const locale = request.headers.get('accept-language')?.split(',')[0] || 'en-US';
  const countryCode = locale.split('-')[1]?.toUpperCase() || 'US';

  const imperialCountries = ['US', 'MM', 'LR'];
  const system = imperialCountries.includes(countryCode) ? 'imperial' : 'metric';

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-units-system', system);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
};
