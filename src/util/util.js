import dataSource from "../constants/dataSource.json";

export const getDataSource = () => {
  return dataSource;
}

export const getRegions = () => {
  let regions = [];
  let uniqueRegions = [];

  dataSource.forEach(obj => {
    regions.push(obj.ChiRegion);
  });
  uniqueRegions = [...new Set(regions)];

  return uniqueRegions;
};

export const getLocations = () => {
  const regions = getRegions();
  let locations = {};

  regions.forEach(region => {
    locations[region] = [];
  });

  dataSource.forEach(obj => {
    regions.forEach(region => {
      if (obj.ChiRegion === region) {
        locations[region].push(obj.ChiLocation);
      }
    });
  });

  regions.forEach((region)=>{
    locations[region] = [...new Set(locations[region])];
  });

  return locations;
};

export const getNumberOfRegions = () => getRegions().length;