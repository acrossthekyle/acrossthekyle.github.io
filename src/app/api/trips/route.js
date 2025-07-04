import { NextResponse } from 'next/server';
import { parse } from 'date-fns';

import tripsTable from '@/data/trips';
import tripGearTable from '@/data/trip-gear';
import tripStagesTable from '@/data/trip-stages';
import tripStagesRoutesTable from '@/data/trip-stages-routes';
import tripStagesStatsTable from '@/data/trip-stages-stats';
import tripStatsTable from '@/data/trip-stats';

import { getLabel } from './utils';

function formatNumber(value) {
  return new Intl.NumberFormat().format(Number(value).toFixed(0));
}

function getTripStats(id, tripType, label, stages) {
  const stats = tripStatsTable
    .filter((stat) => stat.tripId === id)
    .filter((stat) => ['total-time', 'total-distance', 'max-altitude']
      .includes(stat.type)
    )
    .map(({ type, value }) => ({ type, value }));

  const altitude = stats
    .find((stat) => stat.type === 'max-altitude');
  const distance = stats.find((stat) => stat.type === 'total-distance');
  const time = stats.find((stat) => stat.type === 'total-time');

  const result = [{
    value: formatNumber(time ? time.value.days : stages.length),
    units: `${label}s`
  }];

  if (['thru-hike', 'section-hike'].includes(tripType) && distance) {
    result.push({
      value: formatNumber(distance.value),
      units: 'miles',
    });
  }

  if (['summits'].includes(tripType) && altitude) {
    result.push({
      value: formatNumber(altitude.value),
      units: 'ft',
    });
  }

  return result;
}

function getTripStageStats(stageId) {
  const stats = tripStagesStatsTable
    .filter((stageStat) => stageStat.tripStageId === stageId);

  const altitude = stats.find((stat) => stat.type === 'max-altitude');
  const distance = stats.find((stat) => stat.type === 'total-distance');
  const time = stats.find((stat) => stat.type === 'total-time');

  if (!altitude && !distance && !time) {
    return null;
  }

  return {
    altitude: altitude ? {
      value: formatNumber(altitude.value),
      units: 'ft',
    } : null,
    distance: distance ? {
      value: formatNumber(distance.value),
      units: 'miles',
    } : null,
    time: time ? {
      hours: {
        value: time.value.hours,
        units: 'h',
      },
      minutes: {
        value: time.value.minutes,
        units: 'm',
      },
    } : null,
  };
}

export async function GET() {
  const trips = tripsTable
    .sort((a, b) => b.timestamp - a.timestamp)
    .map(({ id, image, location, title, type, year }) => {
      const stages = tripStagesTable
        .filter((tripStage) => tripStage.tripId === id)
        .sort(
          (a, b) =>
            parse(a.date, 'MMMM do, yyyy', new Date()).getTime() -
            parse(b.date, 'MMMM do, yyyy', new Date()).getTime(),
        )
        .map((stage) => {
          const stats = getTripStageStats(stage.id);

          return {
            hasStats: stats !== null,
            image: stage.image,
            gps: stage.gps,
            route: tripStagesRoutesTable
              .find((stageRoute) => stageRoute.tripStageId === stage.id)
                ?.values || null,
            stats,
            title: stage.title,
          };
        });

      const gear = tripGearTable.find(tripGear => tripGear.tripId === id);

      const label = getLabel(type);

      const hasRoutes = stages.filter(stage => stage.route).length > 0;
      const hasGps = stages.filter(stage => stage.gps).length > 0;

      return {
        gear: gear ? {
          ...gear,
          id: undefined,
          tripId: undefined,
          items: undefined,
        } : undefined,
        gps: hasGps ? stages.map(stage => stage.gps) : null,
        hasGear: gear !== undefined,
        hasGps,
        hasRoutes,
        id,
        image,
        label,
        length: stages.length,
        location,
        routes: hasRoutes ? stages.map(stage => stage.route) : null,
        stages,
        stats: getTripStats(id, type, label, stages),
        title,
        type,
        year,
      };
    });

  return NextResponse.json(trips);
}
