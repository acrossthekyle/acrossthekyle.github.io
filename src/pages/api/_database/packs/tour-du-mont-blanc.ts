import { fromCsv } from '../../_utils/packs';

const items = await fromCsv('tour-du-mont-blanc-2018.csv');

export default items;
