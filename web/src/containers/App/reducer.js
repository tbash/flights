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
  options: [
    {
      "carrier": "United Airlines, Inc.",
      "flight_number": "5445",
      "price": 218.2,
      "origin": "SFO",
      "destination": "LAX",
      "duration": 88,
      "arrival_at": "2017-01-20T00:23-08:00",
      "departure_at": "2017-01-19T22:55-08:00"
    },
    {
      "carrier": "Alaska Airlines Inc.",
      "flight_number": "1121",
      "price": 218.2,
      "origin": "SFO",
      "destination": "LAX",
      "duration": 90,
      "arrival_at": "2017-01-19T09:30-08:00",
      "departure_at": "2017-01-19T08:00-08:00"
    },
    {
      "carrier": "Alaska Airlines Inc.",
      "flight_number": "1922",
      "price": 218.2,
      "origin": "SFO",
      "destination": "LAX",
      "duration": 85,
      "arrival_at": "2017-01-19T08:10-08:00",
      "departure_at": "2017-01-19T06:45-08:00"
    },
    {
      "carrier": "Virgin America Inc.",
      "flight_number": "948",
      "price": 218.2,
      "origin": "SFO",
      "destination": "LAX",
      "duration": 85,
      "arrival_at": "2017-01-19T22:20-08:00",
      "departure_at": "2017-01-19T20:55-08:00"
    },
    {
      "carrier": "Virgin America Inc.",
      "flight_number": "928",
      "price": 218.2,
      "origin": "SFO",
      "destination": "LAX",
      "duration": 85,
      "arrival_at": "2017-01-19T15:45-08:00",
      "departure_at": "2017-01-19T14:20-08:00"
    },
    {
      "carrier": "Alaska Airlines Inc.",
      "flight_number": "1926",
      "price": 218.2,
      "origin": "SFO",
      "destination": "LAX",
      "duration": 85,
      "arrival_at": "2017-01-19T13:20-08:00",
      "departure_at": "2017-01-19T11:55-08:00"
    },
    {
      "carrier": "Alaska Airlines Inc.",
      "flight_number": "1942",
      "price": 218.2,
      "origin": "SFO",
      "destination": "LAX",
      "duration": 90,
      "arrival_at": "2017-01-19T21:20-08:00",
      "departure_at": "2017-01-19T19:50-08:00"
    },
    {
      "carrier": "Virgin America Inc.",
      "flight_number": "932",
      "price": 218.2,
      "origin": "SFO",
      "destination": "LAX",
      "duration": 85,
      "arrival_at": "2017-01-19T17:40-08:00",
      "departure_at": "2017-01-19T16:15-08:00"
    },
    {
      "carrier": "Virgin America Inc.",
      "flight_number": "942",
      "price": 218.2,
      "origin": "SFO",
      "destination": "LAX",
      "duration": 90,
      "arrival_at": "2017-01-19T21:20-08:00",
      "departure_at": "2017-01-19T19:50-08:00"
    },
    {
      "carrier": "Alaska Airlines Inc.",
      "flight_number": "1932",
      "price": 218.2,
      "origin": "SFO",
      "destination": "LAX",
      "duration": 85,
      "arrival_at": "2017-01-19T17:40-08:00",
      "departure_at": "2017-01-19T16:15-08:00"
    },
    {
      "carrier": "Alaska Airlines Inc.",
      "flight_number": "1948",
      "price": 218.2,
      "origin": "SFO",
      "destination": "LAX",
      "duration": 85,
      "arrival_at": "2017-01-19T22:20-08:00",
      "departure_at": "2017-01-19T20:55-08:00"
    },
    {
      "carrier": "Virgin America Inc.",
      "flight_number": "926",
      "price": 218.2,
      "origin": "SFO",
      "destination": "LAX",
      "duration": 85,
      "arrival_at": "2017-01-19T13:20-08:00",
      "departure_at": "2017-01-19T11:55-08:00"
    },
    {
      "carrier": "Alaska Airlines Inc.",
      "flight_number": "1928",
      "price": 218.2,
      "origin": "SFO",
      "destination": "LAX",
      "duration": 85,
      "arrival_at": "2017-01-19T15:45-08:00",
      "departure_at": "2017-01-19T14:20-08:00"
    },
    {
      "carrier": "United Airlines, Inc.",
      "flight_number": "207",
      "price": 218.2,
      "origin": "SFO",
      "destination": "LAX",
      "duration": 93,
      "arrival_at": "2017-01-19T14:58-08:00",
      "departure_at": "2017-01-19T13:25-08:00"
    },
    {
      "carrier": "Virgin America Inc.",
      "flight_number": "1946",
      "price": 218.2,
      "origin": "SFO",
      "destination": "LAX",
      "duration": 85,
      "arrival_at": "2017-01-19T10:30-08:00",
      "departure_at": "2017-01-19T09:05-08:00"
    },
    {
      "carrier": "Alaska Airlines Inc.",
      "flight_number": "1936",
      "price": 218.2,
      "origin": "SFO",
      "destination": "LAX",
      "duration": 85,
      "arrival_at": "2017-01-19T18:40-08:00",
      "departure_at": "2017-01-19T17:15-08:00"
    },
    {
      "carrier": "Alaska Airlines Inc.",
      "flight_number": "1946",
      "price": 218.2,
      "origin": "SFO",
      "destination": "LAX",
      "duration": 85,
      "arrival_at": "2017-01-19T10:30-08:00",
      "departure_at": "2017-01-19T09:05-08:00"
    },
    {
      "carrier": "Virgin America Inc.",
      "flight_number": "121",
      "price": 218.2,
      "origin": "SFO",
      "destination": "LAX",
      "duration": 90,
      "arrival_at": "2017-01-19T09:30-08:00",
      "departure_at": "2017-01-19T08:00-08:00"
    },
    {
      "carrier": "Virgin America Inc.",
      "flight_number": "936",
      "price": 218.2,
      "origin": "SFO",
      "destination": "LAX",
      "duration": 85,
      "arrival_at": "2017-01-19T18:40-08:00",
      "departure_at": "2017-01-19T17:15-08:00"
    },
    {
      "carrier": "Virgin America Inc.",
      "flight_number": "922",
      "price": 218.2,
      "origin": "SFO",
      "destination": "LAX",
      "duration": 85,
      "arrival_at": "2017-01-19T08:10-08:00",
      "departure_at": "2017-01-19T06:45-08:00"
    }
  ]
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
