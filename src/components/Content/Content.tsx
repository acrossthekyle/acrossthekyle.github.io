import './Content.scss';

import React from 'react';

type Props = {
  children: React.ReactNode;
};

export function Content({ children }: Props) {
  return (
    <section id="content">
      {children}
    </section>
  );
}
