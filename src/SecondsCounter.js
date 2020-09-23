import React from 'react';


//okay from here below
const SecondsCounter = (props) => {

  var contador =  () => {
    var inicial = props.seconds;
    var location = document.getElementById('contador');
    setInterval(() => {
      location.innerHTML = inicial;
      inicial++;
    }, 1000); 
  }   

  return (
    <div className="container py-3 bg-dark text-light">
      <h1 >
        <i className="far fa-clock mr-5"></i>{contador}
      </h1>
      
    </div>
  )
}


export default SecondsCounter;