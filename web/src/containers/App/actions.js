/*
 *
 * App actions
 *
 */

import {
  SET_USER,
} from './constants';

export const setUser = ({ token, user }) => ({
  type: SET_USER,
  payload: {
    token,
    user
  }
});
