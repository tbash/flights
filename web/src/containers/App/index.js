/*
 *
 * App
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectApp from './selectors';
import './styles.css';

import Button from '../../components/Button';

const App = (props) => {
  return (
    <div className="app">
      <Button/>
    </div>
  );
}

const mapStateToProps = selectApp();

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
