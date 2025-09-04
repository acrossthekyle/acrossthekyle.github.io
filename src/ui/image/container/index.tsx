'use client';

import Context from '../context';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  src: string;
}

export default function Container({ children, src }: Props) {
  return (
    <Context src={src}>
      {children}
    </Context>
  );
}
