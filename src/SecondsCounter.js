import React, { useEffect, useState } from 'react';


//okay from here below
const SecondsCounter = () => {
  const [timer, setTimer] = useState(0)

   useEffect(() => {
    setInterval(() => {
      setTimer(timer => timer + 1)     
    }, 1)
  }, [])

  let result = ('' + timer ).split('')
  if (result.length === 1 ) {
    return (
      <div className="container py-3 bg-dark text-light">
        <h1 >
          <i className="far fa-clock mr-5 p"></i>000{result[0]}
        </h1>
      </div>      
    )

  } else if (result.length === 2) {
    return (
      <div className="container py-3 bg-dark text-light">
        <h1 >
          <i className="far fa-clock mr-5 p"></i>00{result[0]}{result[1]}
        </h1>
      </div>      
    )
  }
  else if (result.length === 3) {
    return (
      <div className="container py-3 bg-dark text-light">
        <h1 >
          <i className="far fa-clock mr-5 p"></i>0{result[0]}{result[1]}{result[2]}
        </h1>
      </div>      
    )
  }

  else if (result.length === 4) {
    return (
      <div className="container py-3 bg-dark text-light">
        <h1 >
          <i className="far fa-clock mr-5 p"></i>{result[0]}{result[1]}{result[2]}{result[3]}
        </h1>
      </div>      
    )
  }

  else if (result.length > 4) {    
    setTimer(0)
  }

  


  
}


export default SecondsCounter;