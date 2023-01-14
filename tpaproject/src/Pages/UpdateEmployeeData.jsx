// import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import { employees } from './ViewEmployeePage';
import React, { useEffect, useState } from 'react'
import { db } from "../firebase-config";
import { collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { async } from '@firebase/util';
// import { useNavigate } from 'react-router-dom';

const UpdateEmployeeData = () => {

    // const updateEmployee = async (id) => {
        
        // }
        
    const p = useParams();
    const loc = useLocation();

    const [employees, setEmployees] = useState([]);
    const employeesRef = collection(db, "employee");

    
    const aa = doc(db, 'employee', p.id);
    const [count, setCount] = useState(0);

    useEffect(() => {

        setCount((count) => count + 1);

        const getEmployees = async () => {
            const employeeData = await getDocs(employeesRef);
            console.log(employeeData);
            setEmployees(employeeData.docs.map((doc) => ({...doc.data(), id: doc.id})));
            console.log("TestUpdate");
            console.log(employees);
            const a1 = await getDoc(aa);
            setUpdatedAge(a1.data().age)
            setUpdatedRole(a1.data().role)
            setUpdatedPhone(a1.data().phoneNumber)
            setUpdatedEmail(a1.data().email)
            console.log(a1);
            setAaa(a1.data());
            console.log(a1.data());

        }

        // const getChosenEmployee = onSnapshot(aa, snapshot => {
        //     setAaa(snapshot.data);
        //     console.log(aaa);
        // });

        

        return ()=>{
            getEmployees();
            // getChosenEmployee();
        }

    }, [loc]);

    // const employee = employees.find(function (id) {
    //     return id === this.id;
    // });

    // const aa = getFirestore().collection("employee").doc(id).get();
    // const aa = collection(getFirestore(), "users", id, "links");
    // const aa = db.collection('employee').doc(p.id).get();
    // const aa = firebase.firestore().collection("employee").doc(id).get().then((snapshot) => {
    //     console.log(snapshot.data())
    //   });
    console.log(p);
    
    const [aaa, setAaa] = useState();
    // console.log(aa);
    //   const q = query(employeesRef, where())

    // const oldAge = aaa?.age
    // const oldRole = aaa?.role
    // const oldEmail = aaa?.email
    // const oldNumber = aaa?.phoneNumber

    const [updatedAge, setUpdatedAge] = useState(0);
    const [updatedRole, setUpdatedRole] = useState("");
    const [updatedEmail, setUpdatedEmail] = useState();
    const [updatedPhone, setUpdatedPhone] = useState();
    const navigate = useNavigate();
    
    const updateEmployee = async (id, updatedAge, updatedRole, updatedEmail, updatedPhone) => {
        // const employeeDoc = doc(db, 'employee', id);
        // if (updatedAge===0) setUpdatedAge(oldAge)
        // if (updatedRole==="") setUpdatedRole(oldRole)
        // if (updatedEmail==="") setUpdatedEmail(oldEmail)
        // if (updatedPhone==="") setUpdatedPhone(oldNumber)
        console.log("age" + updatedAge)
        console.log("role" + updatedRole)
        console.log("email" + updatedEmail)
        console.log("phone" + updatedPhone)
        if (updatedAge > 18 && updatedRole!=="" && updatedEmail!=="" && updatedPhone!=="") {
            // const employeeDoc = aa;
            // const employeeedoc = doc(db,"employee",id);
            // const newFields = ;
            await updateDoc(aa, {age: updatedAge, role: updatedRole, email:updatedEmail, phoneNumber:updatedPhone});
        }
        navigate('/employee/view')
    }

  return (
    <>
        <div>UpdateEmployeeData</div>
        <div>{aaa?.name}</div>
        <div>{aaa?.id}</div>
        <span>Age </span>
        <input type="number" defaultValue={aaa?.age}
            onChange={(event)=>{
                setUpdatedAge(event.target.value);
                console.log(event.target.value + "age")
            }}
        />
        <span>Role </span>
        <input type="text" defaultValue={aaa?.role}
            onChange={(event)=>{
                setUpdatedRole(event.target.value);
                console.log(event.target.value + "role")
            }}
        />
        <span>Email </span>
        <input type="email" defaultValue={aaa?.email}
            onChange={(event)=>{
                setUpdatedEmail(event.target.value);
                console.log(event.target.value+ "email")
            }}
        />
        <span>Phone Number </span>
        <input type="text" defaultValue={aaa?.phoneNumber}
            onChange={(event)=>{
                setUpdatedPhone(event.target.value);
                console.log(event.target.value + "phone")
            }}
        />
        <button onClick={() => {updateEmployee(aaa?.id, updatedAge, updatedRole, updatedEmail, updatedPhone)}}>Update</button>
        {/* <div>{id}</div> */}
        {/* <div>{aa}</div> */}
        {/* {employees.map((employee) => { */}
            {/* return ( */}
                {/* <div key = {employee.id}> */}
                {/* <div>
                    <p>{employee.name}</p>
                    <p>{employee.email}</p>
                    <p>{employee.age}</p>
                    <p>{employee.role}</p>
                </div> */}
            {/* ) */}
        {/* })} */}
        {/* <div></div>
        <div>{employees[id-1].id}</div>
        <div>{employees[id-1].name}</div> */}
    </>
  )
}

export default UpdateEmployeeData
