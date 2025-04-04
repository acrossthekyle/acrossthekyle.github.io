import type { NextApiRequest, NextApiResponse } from 'next';

import type { PacksApiResponse } from '@/types';

import results from '../_database/packs';
import {
  calculateBaseWeight,
  calculateConsumableWeight,
  calculateWeight,
  calculateWeightPerCategory,
  calculateWornWeight,
  groupByCategory,
} from '../_utils/packs';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<PacksApiResponse[]>,
) {
  response.status(200).json(
    results.map((result) => {
      return {
        categories: calculateWeightPerCategory(groupByCategory(result.items)),
        slug: result.slug,
        title: result.title,
        type: result.type,
        weightBase: calculateBaseWeight(result.items),
        weightConsumable: calculateConsumableWeight(result.items),
        weightTotal: calculateWeight(result.items),
        weightWorn: calculateWornWeight(result.items),
      };
    }),
  );
}
