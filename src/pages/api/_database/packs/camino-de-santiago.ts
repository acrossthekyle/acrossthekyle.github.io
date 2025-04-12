import { fromCsv } from '../../_utils/packs';

const items = await fromCsv('camino-de-santiago-2018.csv');

export default items;
