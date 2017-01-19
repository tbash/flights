/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_USER,
} from './constants';

const initialState = fromJS({
  airports: require('./airports.json'),
  user: {
    picture: false,
    name: false
  },
  token: false,
  options: false
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return state.merge(action.payload);
    default:
      return state;
  }
}

export default appReducer;
