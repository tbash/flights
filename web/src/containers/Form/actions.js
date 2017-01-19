/*
 *
 * App actions
 *
 */

import {
  SET_DESTINATION,
  SET_PASSENGER_COUNT,
} from './constants';

export const setDestination = (payload) => ({
  type: SET_DESTINATION,
  payload
});

export const setPassengersCount = (payload) => ({
  type: SET_PASSENGER_COUNT,
  payload
});
