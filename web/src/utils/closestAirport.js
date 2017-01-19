import { List } from 'immutable';

const euclid = (coords, airport) => {
  const deltaLon = Math.pow(coords.longitude - airport.lon, 2),
        deltaLat = Math.pow(coords.latitude - airport.lat, 2);

  return Math.floor(Math.sqrt(deltaLon + deltaLat));
}

export const getCurrentPosition = () => {
  if (navigator.geolocation) {
    return new Promise((resolve,reject) => {
      navigator.geolocation.getCurrentPosition(resolve);
    });
  } else {
    return false;
  }
}

export const closestAirport = (coords, airports) => {
  const airportDistList = List(airports.map((airport) => {
    return {
      ...airport,
      distanceFromCurr: euclid(coords, airport)
    }
  }));

  return airportDistList
    .sortBy((a) => a.distanceFromCurr)
    .first()
}
