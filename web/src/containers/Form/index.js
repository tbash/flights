/*
 *
 * Form
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './styles.css';

import { selectAirports, selectUser } from '../App/selectors';
import Button from '../../components/Button';
import User from '../../components/User';

const Form = ({ user, ...props }) => {
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
        <select>
          <option defaultValue="0">some place</option>
          {props.airports.map((state) => (
            <option key={state.code} value={state.code}>{truncate(state.name)}</option>
          ))}
        </select>
        <br />with{' '}
        <select>
          <option defaultValue="1">me and me alone.</option>
          <option value="2">one other person.</option>
          <option value="3">two other people.</option>
          <option value="4">three other people.</option>
        </select>
        <br />

      </form>
      <Button
        text='FIND A PLANE'
        onClick={(e)=>{console.log(e)}}
      />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  airports: selectAirports(),
  user: selectUser(),
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
