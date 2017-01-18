/*
 *
 * Form
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

import Button from '../../components/Button';

const Form = () => {
  return (
    <div className="form__container">
      <form className="form">
        Today I want to
        <br />go to{' '}
        <select>
          <option defaultValue="1">some place</option>
        </select>
        <br />with{' '}
        <select>
          <option defaultValue="1">any number of</option>
        </select>
        <br />
        people.
      </form>
      <Button
        text='FIND A PLANE'
        onClick={(e)=>{console.log(e)}}
      />
    </div>
  );
}


const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(Form);
