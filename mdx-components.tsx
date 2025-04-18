import { isValidElement } from 'react';
import { type MDXComponents } from 'mdx/types';
import Link from 'next/link';

import Components from './src/components';

const { Posts, World } = Components;
const { Checklist, Gallery, Stages } = Posts;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ children, href }: { children: React.ReactNode; href: string }) => {
      return <Link href={href}>{children}</Link>;
    },
    p: ({ children }) => {
      if (isValidElement(children)) {
        return <>{children}</>;
      }

      return <p>{children}</p>;
    },
    img: ({ alt, src }: { alt?: string; src: string }) => {
      return (
        <Gallery
          images={src.includes(',') ? src.split(',') : [src]}
          title={alt || ''}
        />
      );
    },
    Checklist,
    Stages,
    Stats: () => null, // todo - remove once stats are migrated to database
    World,
    ...components,
  };
}
