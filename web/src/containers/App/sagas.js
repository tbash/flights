import { fork, take, select, call, put } from 'redux-saga/effects';
import {
  SEARCH_REQUEST
} from './constants';
import { setUser, setOptions } from './actions';
import { selectAuthToken } from './selectors';
import { getItem, setItem } from '../../utils/localStorage';
import { unauthedRequest, authedRequest } from '../../utils/api';

export function* authenticate(token, user){
  yield put(setUser({ token, user }));
}

export function* authFlow() {
  const token = yield call(getItem, 'token');

  if (!!token) {
    const { data } = yield call(authedRequest, 'fb_auth', token);

    if (data && data.user) {
      yield fork(authenticate, token, data.user);
    }
  } else if (!!location.search) {
    const code = location.search.split("?code=")[1];

    const { data } = yield call(unauthedRequest, 'fb_auth', {
      method: 'POST',
      body: JSON.stringify({ code })
    });

    if (data && data.user && data.token) {
      yield [
        call(setItem, 'token', data.token),
        fork(authenticate, data.token, data.user),
      ];
    }
  }
}

export function* setResults(options) {
  yield put(setOptions(options));
}

export function* searchReqFlow() {
  while(true) {
    const { payload: { passengersCount, destination }} = yield take(SEARCH_REQUEST);
    const token = yield select(selectAuthToken());
    const uri = `search?passengers_count=${passengersCount}&destination=${destination}`;
    const { data } = yield call(authedRequest, uri, token);

    if (data && data.options) {
      yield fork(setResults, data.options);
    }
  }
}

export default function* appSaga() {
  yield [
    fork(authFlow),
    fork(searchReqFlow)
  ];
}
