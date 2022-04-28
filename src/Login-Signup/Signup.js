import React from 'react'
import { useState } from 'react';


const Signup = () => {

    const [userType, setUserType] = useState(getInitialState) ;

    const getInitialState = () => {
        const value = "";
        return value;
      };

    const handleSelect = (e) => {
        setUserType(e.target.value); 
    }

  return (
    <>
        <div>hey</div>
    </>
  )
}

export default Signup