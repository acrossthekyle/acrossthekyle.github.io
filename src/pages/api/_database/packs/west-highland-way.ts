import { fromCsv } from '../../_utils/packs';

const items = await fromCsv('west-highland-way-2022.csv');

export default items;
