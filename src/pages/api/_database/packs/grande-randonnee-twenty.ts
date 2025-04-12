import { fromCsv } from '../../_utils/packs';

const items = await fromCsv('gr20-2023.csv');

export default items;
