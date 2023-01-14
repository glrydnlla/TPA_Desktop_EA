import React, { useState } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase-config';
import { Link } from 'react-router-dom';
import {NavBar} from '../Component/Navbar'

const Home = () => {

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const logout = async () => {
        await signOut(auth);        
    }  

    // const navbar = async () => {
    //   return (
    //     NavBar
    //   )
    // }

  return (
    <>
        <NavBar/>
        <div>Home</div>
        <div>Welcome, </div>
        {user?.email}
        
    </>
  )
}

export default Home