import { createSelector } from 'reselect';

/**
 * Direct selector to the app state domain
 */
const selectAppDomain = () => state => state.get('app');

/**
 * Other specific selectors
 */

const selectAirports = () => createSelector(
  selectAppDomain(),
  (substate) => substate.get('airports').toJS()
);

const selectUser = () => createSelector(
  selectAppDomain(),
  (substate) => substate.get('user').toJS()
);

const selectAuthToken = () => createSelector(
  selectAppDomain(),
  (substate) => substate.get('token')
);

/**
 * Default selector used by App
 */

const selectApp = () => createSelector(
  selectAppDomain(),
  (substate) => substate.toJS()
);

export default selectApp;
export {
  selectAppDomain,
  selectAirports,
  selectUser,
  selectAuthToken,
};
