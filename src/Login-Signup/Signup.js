import React from 'react'
import { useState } from 'react'
import { Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

var server = 'http://localhost:5001'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


const Signup = () => {
    const id =getRandomInt(1000000000);
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNum, setPhoneNum] = useState(0);
    const [ssn, setSsn] = useState(0);
    const [insurance, setInsurance] = useState('');
    const [age, setAge] = useState(0); 
    const [gender, setGender] = useState('');
    const [streetNum, setStreetNum] = useState(0);
    const [streetName, setStreetName] = useState(''); 
    const [postalCode, setPostalCode] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState(''); 

    var items = {
      "patient_id": id,
      "email": email,
      "password": pwd,
      "first_name": firstName,
      "last_name": lastName,
      "phone_num": phoneNum,
      "ssn": ssn,
      "insurance": insurance,
      "age": age,
      "gender": gender,
      "street_num": streetNum,
      "street_name": streetName,
      "postal_code": postalCode,
      "city": city,
      "province": province
     }
     var user = {"username" : email,
              "password" : pwd,
              "role" : "patient",
             "id" : id}

    const handleSubmit = async (e) => {
        e.preventDefault() ;
        
        console.log(items)

        await fetch(server+"/pAdd", { 
                  method: "POST" ,
                  headers: {
                        "Content-Type": "application/json",
                        "x-access-token": "token-value",
                      },
                      body: JSON.stringify(items)
                }) .then( 
                    
                 await fetch(server+"/loginADD", { 
                    method: "POST" ,
                    headers: {
                          "Content-Type": "application/json",
                          "x-access-token": "token-value",
                        },
                        body: JSON.stringify(user)
                  }).then(setSuccess(true))
                  

              )

    }

  return (
    

    <>
    {success? (

    <Navigate to={`/`} replace={true} />
    ) : (

      <div style={{ margin: '.5rem' , alignContent : 'end'}} >
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}  >
          <label htmlFor="email" style={{ margin: '.5rem' }}>Username:</label>
                      <input type="text"
                      id='email'
                      autoComplete ='off'
                      onChange={(e) => setEmail(e.target.value)}
                      value = {email}
                      required  
          />
          <br />

          <label htmlFor="password" style={{ margin: '.5rem' }}>Password:</label>
                      <input type="password"
                      id='password'
                      autoComplete ='off'
                      onChange={(e) => setPwd(e.target.value)}
                      value = {pwd}
                      required  
          />
          <br />

          <label htmlFor="firstName" style={{ margin: '.5rem' }}>firstName:</label>
                      <input type="text"
                      id='firstName'
                      autoComplete ='off'
                      onChange={(e) => setFirstName(e.target.value)}
                      value = {firstName}
                      required  
          />
          <br />
          <label htmlFor="lastName" style={{ margin: '.5rem' }}>lastName:</label>
                      <input type="text"
                      id='lastName'
                      autoComplete ='off'
                      onChange={(e) => setLastName(e.target.value)}
                      value = {lastName}
                      required  
          />
          <br />
          <label htmlFor="ssn" style={{ margin: '.5rem' }}>ssn:</label>
                      <input type="number"
                      id='ssn'
                      autoComplete ='off'
                      onChange={(e) => setSsn(e.target.value)}
                      value = {ssn}
                      required  
          />
          <br />
          <label htmlFor="insurance" style={{ margin: '.5rem' }}>insurance:</label>
                      <input type="text"
                      id='insurance'
                      autoComplete ='off'
                      onChange={(e) => setInsurance(e.target.value)}
                      value = {insurance}
                      required  
          />
          <br />
          <label htmlFor="phoneNum" style={{ margin: '.5rem' }}>phoneNum:</label>
                      <input type="number"
                      id='phoneNum'
                      autoComplete ='off'
                      onChange={(e) => setPhoneNum(e.target.value)}
                      value = {phoneNum}
                      required  
          />
          <br />
          <label htmlFor="age" style={{ margin: '.5rem' }}>age:</label>
                      <input type="number"
                      id='age'
                      autoComplete ='off'
                      onChange={(e) => setAge(e.target.value)}
                      value = {age}
                      required  
          />
          <br />
          <label htmlFor="gender" style={{ margin: '.5rem' }}>gender:</label>
                      <input type="text"
                      id='gender'
                      autoComplete ='off'
                      onChange={(e) => setGender(e.target.value)}
                      value = {gender}
                      required  
          />
          <br />
          <label htmlFor="streetNum" style={{ margin: '.5rem' }}>streetNum:</label>
                      <input type="number"
                      id='streetNum'
                      autoComplete ='off'
                      onChange={(e) => setStreetNum(e.target.value)}
                      value = {streetNum}
                      required  
          />
          <br />
          <label htmlFor="streetName" style={{ margin: '.5rem' }}>streetName:</label>
                      <input type="text"
                      id='streetName'
                      autoComplete ='off'
                      onChange={(e) => setStreetName(e.target.value)}
                      value = {streetName}
                      required  
          />
          <br />
          <label htmlFor="postalCode" style={{ margin: '.5rem' }}>postalCode:</label>
                      <input type="text"
                      id='postalCode'
                      autoComplete ='off'
                      onChange={(e) => setPostalCode(e.target.value)}
                      value = {postalCode}
                      required  
          />
          <br />
          <label htmlFor="city" style={{ margin: '.5rem' }}>city:</label>
                      <input type="text"
                      id='city'
                      autoComplete ='off'
                      onChange={(e) => setCity(e.target.value)}
                      value = {city}
                      required  
          />
          <br />
          <label htmlFor="province" style={{ margin: '.5rem' }}>province:</label>
                      <input type="text"
                      id='province'
                      autoComplete ='off'
                      onChange={(e) => setProvince(e.target.value)}
                      value = {province}
                      required  
          />
          <br />

          <button>
              Sign Up
          </button>
      </form>
      
  </div>
    )}
  
  </>





    
  )
}

export default Signup