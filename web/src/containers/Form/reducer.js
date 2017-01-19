/*
 *
 * Form reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_DESTINATION,
  SET_PASSENGER_COUNT,
} from './constants';

const initialState = fromJS({
  destination: false,
  passenger_count: "1",
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DESTINATION:
      return state.set('destination', action.payload);
    case SET_PASSENGER_COUNT:
      return state.set('passenger_count', action.payload);
    default:
      return state;
  }
}

export default appReducer;
