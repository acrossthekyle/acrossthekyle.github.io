'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useCountUp } from 'react-countup';

import type { Trip } from '@/styles';

type Model = {
  handleOnInView: () => void;
};

export function useModel(trip: Trip): Model {
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const [stats, setStats] = useState([]);

  const statOneRef = useRef(null);
  const statTwoRef = useRef(null);
  const statThreeRef = useRef(null);

  const { start: startStatOne, update: updateStatOne } = useCountUp({
    ref: statOneRef,
    start: 0,
    end: 1,
  });

  const { start: startStatTwo, update: updateStatTwo } = useCountUp({
    ref: statTwoRef,
    start: 0,
    end: 1,
  });

  const { start: startStatThree, update: updateStatThree } = useCountUp({
    ref: statThreeRef,
    start: 0,
    end: 1,
  });

  useEffect(() => {
    if (trip.type === 'vacation') {
      setStats([
        {
          label: 'time',
          units: 'days',
          ref: statOneRef,
        },
        {
          label: 'sights',
          units: 'destinations',
          ref: statTwoRef,
        },
      ]);
    } else if (trip.type === 'peak-bagging') {
      setStats([
        {
          label: 'total',
          units: 'summits',
          ref: statOneRef,
        },
        {
          label: 'peak',
          units: trip.stats.altitude.units.imperial.full,
          ref: statTwoRef,
        },
      ]);
    }  else {
      setStats([
        {
          label: trip.type === 'section-hike' ? 'total' : 'duration',
          units: trip.type === 'section-hike' ? 'sections' : 'days',
          ref: statOneRef,
        },
        {
          label: 'distance',
          units: trip.stats.distance.units.imperial.full,
          ref: statTwoRef,
        },
        {
          label: 'altitude',
          units: trip.stats.altitude.units.imperial.full,
          ref: statThreeRef,
        },
      ]);
    }
  }, []);

  const handleOnInView = useCallback(
    (isInView: boolean) => {
      if (!hasEnteredView && isInView) {
        setHasEnteredView(true);

        startStatOne();
        startStatTwo();
        startStatThree();

        if (trip.type === 'vacation') {
          updateStatOne(trip.stats.days.value);
          updateStatTwo(trip.stats.length.value);
        } else if (trip.type === 'peak-bagging') {
          updateStatOne(trip.stats.length.value);
          updateStatTwo(trip.stats.altitude.value.imperial.replace(',', ''));
        }  else {
          updateStatOne(trip.stats.days.value);
          updateStatTwo(trip.stats.distance.value.imperial.replace(',', ''));
          updateStatThree(trip.stats.altitude.value.imperial.replace(',', ''));
        }
      }
    },
    [hasEnteredView],
  );

  return {
    handleOnInView,
    stats,
  };
}

