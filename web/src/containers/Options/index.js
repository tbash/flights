/*
 *
 * Options
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

import Option from '../../components/Option';

const Options = ({ options }) => {
  return (
    <div className="options">
      {options.map((option, i) => (
        <Option key={`option-${i}`} {...option}/>
      ))}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(Options);
