import Fuse from 'fuse.js';
import { type NextRequest, NextResponse } from 'next/server';

import PLACES from '@/db/places';
import WORDS from '@/db/words';
import { ROUTES } from '@/routes';

import { formatDateRange } from '../utils';

const COMMANDS = [
  {
    command: '.',
    subtitle: 'Current: {{theme}}',
    tags: ['theme', 'command', 'setting', 'shortcut', 'keyboard'],
    text: 'Switch theme',
  },
];

const fusedPlaces = new Fuse(PLACES, {
  keys: ['title', 'tags', 'location', 'category', 'type'],
});

const fusedWords = new Fuse(WORDS, {
  keys: ['title', 'date', 'content'],
});

const fusedPages = new Fuse(ROUTES, {
  keys: ['path', 'group', 'subtitle', 'text'],
});

const fusedCommands = new Fuse(COMMANDS, {
  keys: ['tags'],
});

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;

  const query = params.get('query');

  if (!query) {
    return NextResponse.json([]);
  }

  return NextResponse.json([
    ...fusedPages
      .search(query)
      .map((result) => result.item)
      .map(({ path, subtitle, text }) => ({
        command: '',
        group: 'pages',
        path,
        subtitle,
        text,
      })),
    ...fusedPlaces
      .search(query)
      .map((result) => result.item)
      .map(({ location, date, slug, title }) => ({
        command: '',
        group: 'places',
        path: `/places/${slug}`,
        subtitle: `${location} — ${formatDateRange(date)}`,
        text: title.join(' '),
      })),
    ...fusedCommands
      .search(query)
      .map((result) => result.item)
      .map(({ command, subtitle, text }) => ({
        command,
        group: 'shortcuts',
        path: '',
        subtitle,
        text,
      })),
    ...fusedWords
      .search(query)
      .map((result) => result.item)
      .map(({ date, slug, title }) => ({
        command: '',
        group: 'words',
        path: `/words/${slug}`,
        subtitle: date,
        text: title,
      })),
  ]);
}
