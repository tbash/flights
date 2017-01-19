import { fork, take, select, call, put } from 'redux-saga/effects';
import {
  SEARCH_REQUEST
} from './constants';
import {
  setUser,
  setOptions,
  setClosestAirportCode,
} from './actions';
import {
  selectAuthToken,
  selectAirports
} from './selectors';
import { getItem, setItem } from '../../utils/localStorage';
import { unauthedRequest, authedRequest } from '../../utils/api';
import { closestAirport, getCurrentPosition } from '../../utils/closestAirport';

export function* authenticate(token, user){
  yield [
    put(setUser({ token, user })),
    fork(searchReqFlow)
  ]
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
  const [airports, geo] = yield [
    select(selectAirports()),
    call(getCurrentPosition)
  ];

  const { code } = yield call(closestAirport, geo.coords, airports);

  yield put(setClosestAirportCode(code));

  while(true) {
    const { payload: { passengersCount, destination, origin }} = yield take(SEARCH_REQUEST);
    const token = yield select(selectAuthToken());
    const uri = `search?passengers_count=${passengersCount}&destination=${destination}&origin=${origin}`;
    const { data } = yield call(authedRequest, uri, token);

    if (data && data.options) {
      yield fork(setResults, data.options);
    }
  }
}

export default function* appSaga() {
  yield [
    fork(authFlow),
  ];
}
