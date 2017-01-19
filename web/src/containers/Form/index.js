/*
 *
 * Form
 * */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './styles.css';
import {
  selectPassengerCount,
  selectDestination,
} from './selectors';
import {
  setPassengerCount,
  setDestination,
} from './actions';

import { searchRequest } from '../App/actions';
import { selectAirports, selectUser } from '../App/selectors';
import Button from '../../components/Button';
import User from '../../components/User';

const Form = (props) => {
  const {
    user,
    airports,
    putRequestSearch,
    putDestination,
    putPassengerCount,
    destination,
    passengerCount
  } = props;

  const truncate = (name) => {
    if (name.length < 13) return name
    return name.substring(0,13)+"..."
  }

  return (
    <div className="form__container">
      <User {...user}/>
      <form className="form">
        Today I want to go to
        <br />
        <select onChange={(e) => { putDestination(e.target.value) }}>
          <option>some place</option>
          {airports.map((state) => (
            <option key={state.code} value={state.code}>{truncate(state.name)}</option>
          ))}
        </select>
        <br />with{' '}
        <select onChange={(e) => { putPassengerCount(e.target.value) }}>
          <option>me and me alone.</option>
          <option value="2">one other person.</option>
          <option value="3">two other people.</option>
          <option value="4">three other people.</option>
        </select>
        <br />
      </form>
      {destination && passengerCount
        ? (<Button
            text='FIND A PLANE'
            onClick={() => {putRequestSearch(destination, passengerCount)}}
          />)
        : null
      }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  airports: selectAirports(),
  user: selectUser(),
  destination: selectDestination(),
  passengerCount: selectPassengerCount(),
});

const mapDispatchToProps = (dispatch) => ({
  putPassengerCount(val) {
    dispatch(setPassengerCount(val))
  },
  putDestination(val) {
    dispatch(setDestination(val))
  },
  putRequestSearch(destination, passengerCount) {
    dispatch(searchRequest({ destination, passengerCount }))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
