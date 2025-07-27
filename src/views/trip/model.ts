'use client';

 import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useEvent } from '@/hooks/useEvent';
import { useTrips } from '@/hooks/useTrips';
import type { Trip } from '@/types';

type Model = {
  handleOnPrevious: () => void;
  handleOnNext: () => void;
  trip: Trip;
};

// const useMousePosition = () => {
//   const [x, setX] = useState(0);
//   const [y, setY] = useState(0);

//   const handleOnMove = (e: MouseEvent) => {
//     setX(e.clientX);
//     setY(e.clientY);
//   };

//   useEffect(() => {
//     window.addEventListener('mousemove', handleOnMove);

//     return () => window.removeEventListener('mousemove', handleOnMove);
//   }, []);

//   return {
//     x,
//     y,
//   };
// };

export function useModel(slug: string): Model {
  const { find, isLoading } = useTrips();

  // const mouse = useMousePosition();

  const router = useRouter();

  // const [exitDirection, setExitDirection] = useState(null);
  const [trip, setTrip] = useState<Trip | undefined>();
  const [toggle, setToggle] = useState('route');

  const getTrip = async () => {
    const result = await find(slug);

    setTrip(result);
  }

  useEffect(() => {
    getTrip();
  }, []);

  const handleOnPrevious = () => {
    // setExitDirection('previous');

    router.push(`/trips/${trip.previous}`);
  };

  const handleOnNext = () => {
    // setExitDirection('next');

    router.push(`/trips/${trip.next}`);
  };

  const handleOnWaypoints = () => {
    setToggle('route');
  };

  const handleOnTimeline = () => {
    setToggle('list');
  };

  useEvent('onEscape', () => {
    router.push('/');
  });

  useEvent('onLeft', () => {
    handleOnPrevious();
  });

  useEvent('onRight', () => {
    handleOnNext();
  });

  return {
    handleOnNext,
    handleOnPrevious,
    handleOnTimeline,
    handleOnWaypoints,
    toggle,
    trip,
  };
}
