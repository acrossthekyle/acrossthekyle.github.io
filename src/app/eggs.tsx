'use client';

import { useEffect } from 'react';

export default function Eggs() {
  useEffect(() => {
    console.log(
      "%cCode",
      "background: #e0e0e0; color: black; border: 1px solid black; padding: 2px 6px; border-radius: 10px; font-weight: bold;"
    );
    console.log('Interested in the coding projects I work on, including this website? Check out my Github: ', 'https://github.com/acrossthekyle');
    console.log(
      "%cCareer",
      "background: #e0e0e0; color: black; border: 1px solid black; padding: 2px 6px; border-radius: 10px; font-weight: bold;"
    );
    console.log('For professional things, use LinkedIn: ', 'https://linkedin.com/in/acrossthekyle');
    console.log(
      "%cCredit",
      "background: #e0e0e0; color: black; border: 1px solid black; padding: 2px 6px; border-radius: 10px; font-weight: bold;"
    );
    console.log("I'm not a designer, and the design of this site was heavily inspired by", 'https://shotoniphone.lorenzobocchi.com');
  }, []);

  return null;
}
