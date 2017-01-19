/*
 *
 * App actions
 *
 */

import {
  SET_USER,
  SEARCH_REQUEST,
  SET_OPTIONS,
  SET_CLOSEST_AIRPORT_CODE,
} from './constants';

export const setUser = ({ token, user }) => ({
  type: SET_USER,
  payload: {
    token,
    user
  }
});


export const searchRequest = ({ passengersCount, destination, origin }) => ({
  type: SEARCH_REQUEST,
  payload: {
    passengersCount,
    destination,
    origin,
  }
});

export const setOptions = (payload) => ({
  type: SET_OPTIONS,
  payload
});

export const setClosestAirportCode = (payload) => ({
  type: SET_CLOSEST_AIRPORT_CODE,
  payload
});
