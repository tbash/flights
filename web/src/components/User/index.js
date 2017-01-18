/**
*
* User
*
*/

import React from 'react';

import './styles.css';

const User = ({ name, picture }) => {
  return (
    <h1>
      I am {name} <img className='user__picture' src={picture} alt={name}/>
    </h1>
  );
}

export default User;
