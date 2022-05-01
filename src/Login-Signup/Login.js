import React from 'react'
import { useRef, useState, useEffect} from 'react';
import { Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

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
            <br></br>
            <Card border="dark" style={{ width: '30%',  marginLeft:'auto', marginRight: 'auto', borderRadius: '12px'}}>
                <Card.Header><h1>Sign In</h1></Card.Header>
                <Card.Body>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                
                <form onSubmit={handleSubmit}>
                <label > Role:  </label>
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
                    <br></br>
                    <br></br>
                    <label htmlFor="email"> Username: </label><br></br>
                    <input type="text"
                    id='email'
                    ref={userRef}
                    autoComplete ='off'
                    onChange={(e) => setUser(e.target.value)}
                    value = {user}
                    required  
                    />
                    <br></br>
                    <br></br>
                    <label htmlFor="password"> Password: </label><br></br>
                    <input type="password"
                    id='password'
                    ref={userRef}
                    onChange={(e) => setPwd(e.target.value)}
                    value = {pwd}
                    required  
                    />
                    <label>
                    </label>
<br></br><br></br>
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
                </Card.Body>
            </Card>
            <br />
                
            </section>
            
        )}
      
      </>
  )
}

export default Login