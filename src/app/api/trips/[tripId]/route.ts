import { type NextRequest, NextResponse } from 'next/server';
import { parse } from 'date-fns';

import tripsTable from '@/data/trips';
import tripGearTable from '@/data/trip-gear';
import tripStagesTable from '@/data/trip-stages';
import tripStagesRoutesTable from '@/data/trip-stages-routes';
import tripStagesStatsTable from '@/data/trip-stages-stats';
import tripStatsTable from '@/data/trip-stats';

import { getLabel } from '../utils';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ tripId: string }> },
) {
  const { tripId } = await params;

  const trip = tripsTable
    .find((trip) => trip.id === tripId);

  const stats = tripStatsTable
    .filter((stat) => stat.tripId === tripId);

  const stages = tripStagesTable
    .filter((stage) => stage.tripId === tripId)
    .sort(
      (a, b) =>
        parse(a.date, 'MMMM do, yyyy', new Date()).getTime() -
        parse(b.date, 'MMMM do, yyyy', new Date()).getTime(),
    )
    .map((stage) => {
      return {
        ...stage,
        route: tripStagesRoutesTable
          .find((stageRoute) => stageRoute.tripStageId === stage.id)?.values || [],
        stats: tripStagesStatsTable
          .filter((stageStat) => stageStat.tripStageId === stage.id)
          // eslint-disable-next-line  @typescript-eslint/no-unused-vars
          .map(({ id, tripId, tripStageId, ...rest }) => rest),
      };
    });

  const gear = tripGearTable.find((tripGear) => tripGear.tripId === tripId);

  if (!trip) {
    return NextResponse.json({ error: 'Trip not found' }, { status: 404 });
  }

  return NextResponse.json({
    gear: {
      categories: gear?.categories || [],
      weightBase: gear?.weightBase || '',
      weightConsumable: gear?.weightConsumable || '',
      weightTotal: gear?.weightTotal || '',
      weightWorn: gear?.weightWorn || '',
    },
    image: trip.image,
    label: getLabel(trip.type),
    location: trip.location,
    // eslint-disable-next-line  @typescript-eslint/no-unused-vars
    stages: stages.map(({ tripId, ...rest }) => rest),
    // eslint-disable-next-line  @typescript-eslint/no-unused-vars
    stats: stats.map(({ id, tripId, ...rest }) => rest),
    title: trip.title,
    type: trip.type,
    year: trip.year,
  }, { status: 200 });
}
