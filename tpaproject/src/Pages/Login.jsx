import React from 'react';
import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase-config';
import { Link , useNavigate} from 'react-router-dom';
import ConditionalLink from '../ConditionalLink';
import { db } from '../firebase-config';
import { query, collection, where, getDocs } from 'firebase/firestore'

const Login = () => {
    const Navigate = useNavigate();
    // const [user, setUser] = useState({});

    // onAuthStateChanged(auth, (currentUser) => {
    //     setUser(currentUser);
    // });

    // console.log("login")
    const q = query(collection(db, "employee"), where("status", "==", "Active"));
    const [employees, setEmployees] = useState([]);
    const employeesRef = collection(db, "employee");

    useEffect(() => {
        const getEmployees = async () => {
            const employeeData = await getDocs(employeesRef);
            console.log(employeeData);
            setEmployees(employeeData.docs.map((doc) => ({...doc.data(), id: doc.id})));
            console.log("Test");
            console.log(employees);
        }

        getEmployees();

    }, []);

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    // let user = signInWithEmailAndPassword(auth, "", "");
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            if(user != null){
                employees.forEach(employee => {
                    if (employee.email === loginEmail) {
                        sessionStorage.setItem("currID", employee.id)
                        sessionStorage.setItem("currName", employee.name)
                        sessionStorage.setItem('currentUser', loginEmail);
                        sessionStorage.setItem('currentRole', employee.role)
                        console.log(sessionStorage.getItem('currentUser') + "lalala");
                        Navigate("/home")
                    }
                })
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
    <>
        <div>Login</div>
        <div>
            <p>Email</p>
            <input type="email" placeholder='email' 
                onChange={(event)=>{
                    setLoginEmail(event.target.value);
                }}
            />
            <p>Password</p>
            <input type="password" 
                onChange={(event)=>{
                    setLoginPassword(event.target.value);
                }}
            />
                <button onClick={login}>Login</button>
            {/* <ConditionalLink to='/' condition={sessionStorage.getItem("currentUser")!==null && (loginEmail!=="")&&(loginPassword!=="")}>
            </ConditionalLink> */}
        </div>
    </>
  )
}

export default Login