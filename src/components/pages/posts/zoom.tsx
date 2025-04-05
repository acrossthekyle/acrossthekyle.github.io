'use client';

import {
  MutableRefObject,
  ReactNode,
  Ref,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import Contexts from '@/contexts';

import Image from '../../image';

type Props = {
  alt?: string;
  height: number;
  sizes?: string;
  src: string;
  width: number;
};

function Zoom(props: Props) {
  const { isZoomed, toggleZoom } = useContext(Contexts.ZoomContext);

  const [isActive, toggleIsActive] = useState(false);
  const [zIndex, setZindex] = useState<number | null>(null);

  const imageRef: MutableRefObject<HTMLImageElement | null> =
    useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (isActive && !isZoomed) {
      zoomOut();

      toggleIsActive(false);
    }
  }, [isZoomed, isActive]);

  const handleOnClick = () => {
    if (isZoomed && isActive) {
      zoomOut();
    }

    toggleIsActive(!isActive);
    toggleZoom();
  };

  const zoomOut = () => {
    setZindex(801);

    setTimeout(() => {
      setZindex(null);
    }, 400);
  };

  const calculateTransform = (): string => {
    if (isZoomed === false) {
      return undefined;
    }

    if (imageRef.current && isActive) {
      const imageBCR = imageRef.current.getBoundingClientRect();

      const scale = Math.min(
        window.innerWidth / (imageBCR.width * 1.1),
        window.innerHeight / (imageBCR.height * 1.1),
      );
      const translateX =
        (window.innerWidth - imageBCR.width) / 2 - imageBCR.left;
      const translateY =
        (window.innerHeight - imageBCR.height) / 2 - imageBCR.top;

      return `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`;
    }

    return undefined;
  };

  const calculateZindex = (): number => {
    if (zIndex !== null) {
      return zIndex;
    }

    return undefined;
  };

  return (
    <Image
      alt=""
      {...props}
      data-zoom={isActive ? (isZoomed === false ? 'false' : 'true') : 'false'}
      onClick={handleOnClick}
      ref={imageRef}
      style={{
        transform: calculateTransform(),
        zIndex: calculateZindex(),
      }}
    />
  );
}

export default Zoom;
