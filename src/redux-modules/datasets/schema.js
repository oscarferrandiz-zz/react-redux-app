import { schema, normalize } from 'normalizr';

const dataset = new schema.Entity('datasets');
const datasetsList = [dataset];

const datasetNormalizer = data => normalize(data, datasetsList);

export default datasetNormalizer;
