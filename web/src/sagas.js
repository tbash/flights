import { fork } from 'redux-saga/effects';
import appSaga from './containers/App/sagas';

export default function * root () {
  yield [
    fork(appSaga),
  ];
}
