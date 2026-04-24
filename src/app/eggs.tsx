'use client';

import { useEffect } from 'react';

export default function Eggs() {
  useEffect(() => {
    console.log('+ ≠ +');
    console.log('This website is my personal sandbox and I love tinkering with different designs and data. Some helpful links: %O', {
      email: 'hello@acrossthekyle.com',
      github: 'https://github.com/acrossthekyle',
      instagram: 'https://instagram.com/acrossthekyle',
      linkedIn: 'https://linkedin.com/in/acrossthekyle',
      siteDesignInspiration: 'https://shotoniphone.lorenzobocchi.com',
    });
    console.log('+ ≠ +');
  }, []);

  return null;
}
