import { isValidElement } from 'react';
import { type MDXComponents } from 'mdx/types';
import Link from 'next/link';

import Checklist from './src/ui/checklist';
import Pack from './src/ui/pack';
import Stages from './src/ui/stages';
import Stats from './src/ui/stats';
import World from './src/ui/world';
import Gallery from './src/ui/post/gallery';

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
