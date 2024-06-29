'use client';

import {
  MutableRefObject,
  ReactNode,
  Ref,
  useEffect,
  useRef,
  useState,
} from 'react';

type PassDownProps = {
  'data-zoom': string;
  onClick: () => void;
  ref: Ref<HTMLImageElement | null>;
  style: {
    transform: string;
    zIndex: number;
  };
};

type Props = {
  children: (props: PassDownProps) => ReactNode;
};

function Zoom({ children }: Props) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zIndex, setZindex] = useState<number | null>(null);

  const imageRef: MutableRefObject<HTMLImageElement | null> =
    useRef<HTMLImageElement>(null);

  const handleOnClick = () => {
    if (isZoomed) {
      setZindex(801);

      setTimeout(() => {
        setZindex(null);
      }, 400);
    }

    setIsZoomed(!isZoomed);
  };

  const handleOnReset = () => {
    setIsZoomed(false);
  };

  useEffect(() => {
    const backdrop = document.querySelector('[data-backdrop]');

    backdrop.addEventListener('click', handleOnReset);

    document.addEventListener('keyup', handleOnReset);
    window.addEventListener('scroll', handleOnReset);
    window.addEventListener('resize', handleOnReset);

    return () => {
      backdrop.removeEventListener('click', handleOnReset);

      document.removeEventListener('keyup', handleOnReset);
      window.removeEventListener('scroll', handleOnReset);
      window.removeEventListener('resize', handleOnReset);
    };
  }, []);

  useEffect(() => {
    document
      .querySelector('[data-backdrop]')
      .setAttribute(
        'data-backdrop-active',
        isZoomed === false ? 'false' : 'true',
      );
  }, [isZoomed]);

  const calculateTransform = (): string => {
    if (isZoomed === false) {
      return undefined;
    }

    if (imageRef.current) {
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
    <>
      {children({
        'data-zoom': isZoomed === false ? 'false' : 'true',
        onClick: handleOnClick,
        ref: imageRef,
        style: {
          transform: calculateTransform(),
          zIndex: calculateZindex(),
        },
      })}
    </>
  );
}

export default Zoom;
