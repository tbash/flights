/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  airports: require('./airports.json'),
  user: {
    picture: "https://scontent.xx.fbcdn.net/v/t1.0-1/p320x320/11214332_1444286842551018_4483182614040773779_n.jpg?oh=ceeab6afdac6b5d8540c3e42b30af678&oe=590AC7C9",
    name: "TB Ashley"
  },
  token: "Bearer 1708902059422827:EAAO7hPZCLwuYBAOxwWc6GFE8RSwQWbXokdRo2IWg0nWmjNO65yc3VoRBBl5JUZA98UJy894k5uvIygLQP3yvScm6D15WWOSZABnQ1fHYZAEfrUtc4Kg0m20y2pDUmxPZAxW8wn6TZCxo9sCXvsYLZA4z0SwJCpRN7UZD",
  options: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default appReducer;
