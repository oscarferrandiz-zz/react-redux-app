const getDatasets = () => fetch('https://api.resourcewatch.org/v1/dataset?application=aqueduct');

export { getDatasets };
