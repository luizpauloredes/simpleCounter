import React, { useEffect, useState } from 'react';
import Proptypes from 'prop-types';
import App from './App';

//okay from here below
const SecondsCounter = () => {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setTimer(timer => timer++)
    }, 1000)
  }, [])


  return (
    <div className="container py-3 bg-dark text-light">
      <h1 >
        <i className="far fa-clock mr-5 p"></i>
      </h1>

    </div>
  )
}


export default SecondsCounter;