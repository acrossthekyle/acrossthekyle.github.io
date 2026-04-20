'use server';

import { cookies } from 'next/headers';

export async function setTheme(theme: string) {
  const cookieStore = await cookies();

  cookieStore.set('theme', theme, {
    path: '/',
    maxAge: 31536000,
    sameSite: 'lax',
  });
};

export async function setUnits(units: string) {
  const cookieStore = await cookies();

  cookieStore.set('units', units, {
    path: '/',
    maxAge: 31536000,
    sameSite: 'lax',
  });
};

export async function setView(view: string) {
  const cookieStore = await cookies();

  cookieStore.set('view', view, {
    path: '/',
    maxAge: 31536000,
    sameSite: 'lax',
  });
};
