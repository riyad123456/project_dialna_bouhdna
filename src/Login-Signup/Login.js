import React from 'react'
import { useRef, useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {



    const getInitialState = () => {
        const value = "";
        return value;
      };


    const [userType, setUserType] = useState(getInitialState) ; 
    

    const userRef = useRef(); 
    const errRef = useRef() ;

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
            // const response = await axios.post(LOGIN_URL, 
            //     JSON.stringify({user,pwd}) , 
            //     {
            //         headers : {'Content-Type' : 'application/json'} , 
            //         withCredentials : true
            //     }
            //     );
            // console.log(JSON.stringify(response?.data));
            // console.log(JSON.stringify(response));

            // const accessToken = response?.data?.accessToken ;
            // const roles = response?.data.roles ; 
            // setAuth({user, pwd , roles, accessToken})
            console.log({user,pwd})
            setUser('');
            setSuccess('') ;
            setSuccess(true) ; 
        } catch (err) {
            if(!err?.response) {
                setErrMsg('No Server Response');
            }else if (err.response?.status ===400) {
                setErrMsg('Missing email or Password') ;
            }else if (err.response?.status === 401) {
                setErrMsg('Unauthorized') ; 
            }else {
                setErrMsg('Login Failed') ; 
            }
            errRef.current.focus() ; 
        }
        
    }
    


  return (
      <>
        {success? (
            <section>
                <h1>You are Logged in</h1>
                <br />
                <p>
                    <a href={`/${userType}`}>Go to home</a>
                </p>
            </section>
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
                    <label htmlFor="email">Email:</label>
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