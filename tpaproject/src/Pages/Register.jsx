import React from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase-config';
import { useState } from 'react';

const Register = () => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
        try {
          const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
          console.log(user);
        } catch (error) {
          console.log(error.message);
        }
    }  

  return (
    <>
        <div>Register</div>
        <div>
            <p>Email</p>
            <input type="email" placeholder='email' 
                onChange={(event)=>{
                    setRegisterEmail(event.target.value);
                }}
            />
            <p>Password</p>
            <input type="password" 
                onChange={(event)=>{
                    setRegisterPassword(event.target.value);
                }}
            />
            <input type="button" value="Register" onClick={register}/>
            <div></div>
        </div>
    </>

  )
}

export default Register