import { isValidElement } from 'react';
import { type MDXComponents } from 'mdx/types';
import Link from 'next/link';

import Components from './src/components';

const {
  Checklist,
  Gallery,
  Pack,
  Stages,
  Stats,
  World,
} = Components.Posts;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ children, href }) => {
      return <Link href={href}>{children}</Link>;
    },
    p: ({ children }) => {
      if (isValidElement(children)) {
        return <>{children}</>;
      }

      return <p>{children}</p>;
    },
    img: ({ alt, src }) => {
      return (
        <Gallery
          images={src.includes(',') ? src.split(',') : [src]}
          title={alt || ''}
        />
      );
    },
    Checklist,
    Pack,
    Stages,
    Stats,
    World,
    ...components,
  };
}
