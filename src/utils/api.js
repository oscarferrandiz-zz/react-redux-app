const getDatasets = async () => {
  const data = await fetch('https://api.resourcewatch.org/v1/dataset?application=aqueduct');
  return data.json();
};

export { getDatasets };
