/**
*
* Button
*
*/

import React from 'react';

import './styles.css';

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className="button">
      {text || "INSERT TEXT!"}
    </button>
  );
}

export default Button;
