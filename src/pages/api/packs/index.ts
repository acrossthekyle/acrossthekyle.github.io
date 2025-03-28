import type { NextApiRequest, NextApiResponse } from 'next';

import type { PacksApiResponse } from '@/types/packs';

import results from '../_database/packs';
import {
  calculateBaseWeight,
  calculateConsumableWeight,
  calculateWeight,
  calculateWeightPerCategory,
  calculateWornWeight,
  convertWeightPerItem,
  groupByCategory,
} from '../_utils/packs';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<PacksApiResponse[]>,
) {
  const isMetric = request.query.units === 'metric';

  response.status(200).json(
    results.map((result) => {
      const items = convertWeightPerItem(result.items, isMetric);

      return {
        categories: calculateWeightPerCategory(
          groupByCategory(items),
          isMetric,
        ),
        slug: result.slug,
        title: result.title,
        type: result.type,
        weightBase: calculateBaseWeight(items, isMetric),
        weightConsumable: calculateConsumableWeight(items, isMetric),
        weightTotal: calculateWeight(items, isMetric),
        weightWorn: calculateWornWeight(items, isMetric),
      };
    }),
  );
}
