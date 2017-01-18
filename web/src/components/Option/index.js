/**
*
* Option
*
*/

import React from 'react';
import './styles.css';

import From from './from.svg';
import To from './to.svg';

const Option = (props) => {
  const {
    carrier,
    flight_number,
    price,
    origin,
    destination,
    duration,
    departure_at,
    arrival_at,
  } = props;

  const parseTime = (time) => {
    return new Date(time)
      .toTimeString()
      .substring(0, 5)
  }

  const parsePrice = (price) => {
    return `$${price.toFixed(2)}`
  }

  return (
    <div className="option">
      <header>Flight #{flight_number} with {carrier}</header>
      <section>
        <p>Costs {parsePrice(price)} and takes {duration} minutes</p>
        <p>
          <img width='50px' src={From} alt='from'/>
          {' '}{origin} at {parseTime(departure_at)}
        </p>
        <p>
          <img width='50px' src={To} alt='from'/>
          {' '}{destination} at {parseTime(arrival_at)}
        </p>
      </section>
    </div>
  );
}

export default Option;
