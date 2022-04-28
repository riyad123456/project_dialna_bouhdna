import React from 'react'
import { useRef, useState, useEffect} from 'react';
import { Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

var server = 'http://localhost:5001'
const Login = () => {



    const getInitialState = () => {
        const value = "";
        return value;
      };


    const [userType, setUserType] = useState(getInitialState) ; 
    

    const userRef = useRef(); 
    const errRef = useRef() ;
    
    const [id, setID] = useState(0);
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false); 

    useEffect(() => {
        userRef.current.focus() ; 
    }, []);

    useEffect(() => {
      setErrMsg('');

    }, [user, pwd])

    const handleSelect = (e) => {
        setUserType(e.target.value); 
    }

    const handleSubmit = async (e) => {
        e.preventDefault() ; 
        try {
            var currentitem = {"username " : user, "password" : pwd, "role" : userType.toString()}
            console.log(userType)
            console.log(currentitem)
            fetch(server+`/login/${currentitem["username "]}`, { 
                method: "GET" }).then(res => res.json())
                
                .then( (result) =>{
                    
                    
                    if(result["password"]==currentitem["password"] && result["role"]==currentitem["role"].toLowerCase()){
                        setSuccess(true)
                        setID(result["id"])
                        console.log(result["id"])
                        
                    }
                    else{
                        
                    }
                    

                })
                

         
        } catch (err) {
            console.log(err.message)
        }
        
    }
    


  return (
      <>
        {success? (

        <Navigate to={`/${userType}/${id}`} replace={true} />
        ) : (

            <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <label >
                        <div className="container">
                            <div className="row">
                            <div className="col-md-2"></div>
                            <div className="">
                            <select value={userType} onChange={handleSelect}>
                                <option value=''></option>
                                <option value="Dentist">Dentist</option>
                                <option value="Patient">Patient</option>
                                <option value="Receptionist">Receptionist</option>
                            </select>
                                
                            </div>
                            <div className="col-md-2"></div>
                            </div>
                        </div>
                    </label>
                    <label htmlFor="email">Username:</label>
                    <input type="text"
                    id='email'
                    ref={userRef}
                    autoComplete ='off'
                    onChange={(e) => setUser(e.target.value)}
                    value = {user}
                    required  
                    />
                    <label htmlFor="password">Password:</label>
                    <input type="password"
                    id='password'
                    ref={userRef}
                    onChange={(e) => setPwd(e.target.value)}
                    value = {pwd}
                    required  
                    />
                    <label>
                    </label>

                    <button className='padding : 15px'>
                        Sign In
                    </button>
                        <div>
                            Signing as: {userType}
                        </div>
                        <br />

                    <p>
                                Need an Account?<br />
                                <span className="line">
                                    {/*put router link here*/}
                                    <a href="/signup">Sign Up</a>
                                </span>
                    </p>
                    
                </form>
            </section>
        )}
      
      </>
  )
}

export default Login