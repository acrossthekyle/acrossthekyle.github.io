'use client';

import { InView } from 'react-intersection-observer';
import Link from 'next/link';
import { useCallback, useState } from 'react';

import Images from '@/images';
import Styles from '@/styles';
import type { Components } from '@/types';

import Image from './image';

const scss = Styles.Components.World;

type Props = {
  className?: string;
  markers: Components.Marker[];
};

function World({ className = '', markers }: Props) {
  const [hasEnteredView, setHasEnteredView] = useState(false);

  const handleOnInView = useCallback(
    (isInView: boolean) => {
      if (!hasEnteredView && isInView) {
        setHasEnteredView(true);
      }
    },
    [hasEnteredView],
  );

  return (
    <InView onChange={handleOnInView} threshold={0.3}>
      {({ ref }) => (
        <div
          className={`${scss.world} ${className}`.trim()}
          data-in-view={hasEnteredView}
          ref={ref}
        >
          <Image
            alt="world map"
            canTransform={false}
            height={1080}
            quality={10}
            sizes="100vw"
            src="2024/06/28/0cf56f29-a903-4756-bb03-40b6b4b2d2fd.webp"
            width={1920}
          />
          {markers.map((marker, index) => {
            const props = {
              className:
                `${scss.marker} ${marker.isPrivate ? scss.private : ''} ${marker.isPointOfOrigin ? scss.origin : ''}`.trim(),
              style: hasEnteredView
                ? {
                    top: marker.top,
                    left: marker.left,
                  }
                : undefined,
              title: marker.label,
            };

            if (marker.uri) {
              return (
                <Link {...props} href={marker.uri} key={`marker-${index}`}>
                  <Images.Icons.Marker />
                </Link>
              );
            }

            return (
              <div {...props} key={`marker-${index}`}>
                <Images.Icons.Marker />
              </div>
            );
          })}
        </div>
      )}
    </InView>
  );
}

export default World;
