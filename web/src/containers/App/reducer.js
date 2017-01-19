/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_USER,
  SET_OPTIONS,
  SET_CLOSEST_AIRPORT_CODE,
} from './constants';

const initialState = fromJS({
  airports: require('./airports.json'),
  user: {
    picture: false,
    name: false
  },
  token: false,
  options: false,
  closestAirportCode: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return state.merge(action.payload);
    case SET_OPTIONS:
      return state.set('options', action.payload);
    case SET_CLOSEST_AIRPORT_CODE:
      return state.set('closestAirportCode', action.payload);
    default:
      return state;
  }
}

export default appReducer;
