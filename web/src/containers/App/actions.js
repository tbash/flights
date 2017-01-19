/*
 *
 * App actions
 *
 */

import {
  SET_USER,
  SEARCH_REQUEST,
  SET_OPTIONS,
} from './constants';

export const setUser = ({ token, user }) => ({
  type: SET_USER,
  payload: {
    token,
    user
  }
});


export const searchRequest = ({ destination, passengerCount }) => ({
  type: SEARCH_REQUEST,
  payload: {
    destination,
    passengerCount,
  }
});

export const setOptions = (payload) => ({
  type: SET_OPTIONS,
  payload
});
