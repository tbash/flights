import { combineReducers } from 'redux-immutable';

import app from './containers/App/reducer';
import form from './containers/Form/reducer';

export default function createReducer() {
  return combineReducers({
    app,
    form,
  });
}
