'use client';

import { useEffect } from 'react';

import data from '@/db/config';

export default function Eggs() {
  useEffect(() => {
    console.log(
      "%cConsole Output",
      "background: #e0e0e0; color: black; border: 1px solid black; padding: 2px 6px; border-radius: 10px; font-weight: bold;"
    );
    console.log('Last compiled: ', data.lastUpdated);
    console.log('Code? Github: ', 'https://github.com/acrossthekyle');
    console.log('Career? LinkedIn: ', 'https://linkedin.com/in/acrossthekyle');
    console.log("Site design? Inspired by", 'https://shotoniphone.lorenzobocchi.com');
  }, []);

  return null;
}
