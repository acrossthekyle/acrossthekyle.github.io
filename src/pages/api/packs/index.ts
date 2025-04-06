import type { NextApiRequest, NextApiResponse } from 'next';

import type { Packs } from '@/types';

import packs from '../_database/packs';
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
  response: NextApiResponse<Packs.Pack[]>,
) {
  response.status(200).json(
    packs.map((result) => {
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
