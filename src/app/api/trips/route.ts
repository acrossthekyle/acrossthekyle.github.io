import { NextResponse } from 'next/server';

import tripsTable from '@/data/trips';
import tripStatsTable from '@/data/trip-stats';

import { getLabel } from './utils';

export async function GET() {
  return NextResponse.json(
    tripsTable
      .sort((a, b) => b.timestamp - a.timestamp)
      .map(({ id, image, location, title, type, year }) => {
        const stats = tripStatsTable
          .filter((stat) => stat.tripId === id)
          .filter((stat) => ['total-time', 'total-distance', 'max-altitude'].includes(stat.type))
          .map(({ type, value }) => ({ type, value }));

        return {
          id,
          image,
          label: getLabel(type),
          location,
          stats: {
            altitude: stats
              .find((stat) => stat.type === 'max-altitude')?.value,
            distance: Number(
                stats.find((stat) => stat.type === 'total-distance')?.value
              ).toFixed(0),
            time: stats
              // @ts-expect-error - days does exist
              .find((stat) => stat.type === 'total-time')?.value?.days,
          },
          title,
          type,
          year,
        };
      })
  );
}
