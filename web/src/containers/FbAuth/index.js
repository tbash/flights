/*
 *
 * FbAuth
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

import Icon from '../../components/Icon';

const FbAuth= () => {
  const fbAppId    = process.env.REACT_APP_FACEBOOK_APP_ID,
        fbRedirect = process.env.REACT_APP_FACEBOOK_REDIRECT_URI;


  return (
    <div className="fb-auth">
        <a
          href={
            `https://www.facebook.com/dialog/oauth?client_id=${fbAppId}&scope=public_profile,email&redirect_uri=${fbRedirect}`
          }>
          <div className="fb-auth__wrapper">
            login
            <Icon name='fb'/>
          </div>
        </a>
    </div>
  );
}


const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(FbAuth);
