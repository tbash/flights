/*
 *
 * App
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectApp from './selectors';
import './styles.css';

import Form from '../Form';
import Options from '../Options';

const App = ({ token, options }) => {
  let content = (<div/>);

  if (!!token) {
    content = (<Form />);
  }

  if (!!options) {
    content = (<Options options={options} />);
  }

  return (
    <div className="app">
      {content}
    </div>
  );
}

const mapStateToProps = selectApp();

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
