import React, {useState} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../firebase-config';

function App() {
    const Navigate = useNavigate();
    // const [user, setUser] = useState({});

    // onAuthStateChanged(auth, (currentUser) => {
    //     setUser(currentUser);
    // });

    // console.log("login")

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    // let user = signInWithEmailAndPassword(auth, "", "");
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            if(user != null){
                sessionStorage.setItem('currentUser', loginEmail);
                console.log(user + "lalala");
                Navigate("/")
            }else{
                alert("salah")
            }
            // console.log(user);
            
        } catch (error) {
            sessionStorage.setItem('currentUser', null);
            // console.log(user + "lalala");
            console.log(sessionStorage.getItem('currentUser'));
            console.log(error.message);
        }
    }
  return (
    <MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
            <span className="h1 fw-bold mb-0">Logo</span>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>

            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg" onChange={(event)=>{
                    setLoginEmail(event.target.value);
                }}/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg" onChange={(event)=>{
                    setLoginPassword(event.target.value);
                }}/>

            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg' onClick={login}>Login</MDBBtn>

            <p className='ms-5'>Don't have an account? <a href="/register" class="link-info">Register here</a></p>

          </div>

        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
            alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default App;