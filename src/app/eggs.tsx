'use client';

import { useEffect } from 'react';

import data from '@/db/config';

export default function Eggs() {
  useEffect(() => {
    console.log(
      "%cConsole Output",
      "background: #e0e0e0; color: black; border: 1px solid black; padding: 2px 6px; border-radius: 10px; font-weight: bold;"
    );
    console.log('Compiled: ', data.lastUpdated);
    console.log('Github: ', 'https://github.com/acrossthekyle');
    console.log('LinkedIn: ', 'https://linkedin.com/in/acrossthekyle');
    console.log('Inspired by', 'https://shotoniphone.lorenzobocchi.com');
  }, []);

  return null;
}
