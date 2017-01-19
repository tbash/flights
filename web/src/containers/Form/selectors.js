import { createSelector } from 'reselect';

/**
 * Direct selector to the app state domain
 */
const selectFormDomain = () => state => state.get('form');

/**
 * Other specific selectors
 */

const selectPassengersCount = () => createSelector(
  selectFormDomain(),
  (substate) => substate.get('passenger_count')
);

const selectDestination = () => createSelector(
  selectFormDomain(),
  (substate) => substate.get('destination')
);

/**
 * Default selector used by Form
 */

const selectForm = () => createSelector(
  selectFormDomain(),
  (substate) => substate.toJS()
);

export default selectForm;
export {
  selectFormDomain,
  selectPassengersCount,
  selectDestination,
};
