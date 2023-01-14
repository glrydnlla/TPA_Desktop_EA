// import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import { employees } from './ViewEmployeePage';
import React, { useEffect, useState } from 'react'
import { db } from "../firebase-config";
import { collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { async } from '@firebase/util';
// import { useNavigate } from 'react-router-dom';

const UpdateEmployeeWorkingTime = () => {

    // const updateEmployee = async (id) => {
        
        // }
        
    const p = useParams();
    const loc = useLocation();
    // console.log(p.id);
    const [employees, setEmployees] = useState([]);
    const employeesRef = collection(db, "employee");
    
    const [updatedMondayShift, setUpdatedMondayShift] = useState(0);
    const [updatedTuesdayShift, setUpdatedTuesdayShift] = useState(0);
    const [updatedWednesdayShift, setUpdatedWednesdayShift] = useState(0);
    const [updatedThursdayShift, setUpdatedThursdayShift] = useState(0);
    const [updatedFridayShift, setUpdatedFridayShift] = useState(0);
    const [updatedSaturdayShift, setUpdatedSaturdayShift] = useState(0);
    
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
            setUpdatedMondayShift(a1.data().mondayShift)
            setUpdatedTuesdayShift(a1.data().tuesdayShift)
            setUpdatedWednesdayShift(a1.data().wednesdayShift)
            setUpdatedThursdayShift(a1.data().thursdayShift)
            setUpdatedFridayShift(a1.data().fridayShift)
            setUpdatedSaturdayShift(a1.data().saturdayShift)
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

    
    const navigate = useNavigate();
    
    

    const updateEmployee = async () => {
        // const employeeDoc = doc(db, 'employee', id);
        // if (updatedAge===0) setUpdatedAge(oldAge)
        // if (updatedRole==="") setUpdatedRole(oldRole)
        // if (updatedEmail==="") setUpdatedEmail(oldEmail)
        // if (updatedPhone==="") setUpdatedPhone(oldNumber)
        // console.log("age" + updatedAge)
        // console.log("role" + updatedRole)
        // console.log("email" + updatedEmail)
        // console.log("phone" + updatedPhone)
        console.log("monday"+ updatedMondayShift);
        console.log(updatedTuesdayShift);
        console.log(updatedWednesdayShift);
        console.log(updatedThursdayShift);
        console.log(updatedFridayShift);
        console.log(updatedSaturdayShift);
        console.log(aa);
        if ((updatedMondayShift===1||updatedMondayShift===2) && 
            (updatedTuesdayShift===1||updatedTuesdayShift===2) && 
            (updatedWednesdayShift===1||updatedWednesdayShift===2) &&
            (updatedThursdayShift===1||updatedThursdayShift===2) &&
            (updatedFridayShift===1||updatedFridayShift===2) &&
            (updatedSaturdayShift===1||updatedSaturdayShift===2)) {
            // const employeeDoc = aa;
            // const employeeedoc = doc(db,"employee",id);
            // const newFields = ;
            console.log("gggupdatg");
            await updateDoc(aa, {
                mondayShift:updatedMondayShift,
                tuesdayShift:updatedTuesdayShift,
                wednesdayShift:updatedWednesdayShift,
                thursdayShift:updatedThursdayShift,
                fridayShift:updatedFridayShift,
                saturdayShift:updatedSaturdayShift
            });
        }
        // console.log("monday"+ aaa?.mondayShift);
        // console.log("tues"+ aaa?.tuesdayShift);
        // console.log("wed"+ aaa?.wednesdayShift);
        // console.log("thu"+ aaa?.thursdayShift);
        // console.log("fri"+ aaa?.fridayShift);
        // console.log("sat"+ aaa?.saturdayShift);
        // navigate('/employeeShift/view')
    }

  return (
    <>
        <div>UpdateEmployeeWorkingTime</div>
        <div>{aaa?.name}</div>
        <div>{aaa?.id}</div>
        <span>Monday </span>
        <input type="number" defaultValue={aaa?.mondayShift}
            onChange={(event)=>{
                setUpdatedMondayShift(parseInt(event.target.value));
                console.log(event.target.value + "age")
            }}
        />
        <span>Tuesday </span>
        <input type="number" defaultValue={aaa?.tuesdayShift}
            onChange={(event)=>{
                setUpdatedTuesdayShift(parseInt(event.target.value));
                console.log(event.target.value + "age")
            }}
        />
        <span>Wednesday </span>
        <input type="number" defaultValue={aaa?.wednesdayShift}
            onChange={(event)=>{
                setUpdatedWednesdayShift(parseInt(event.target.value));
                console.log(event.target.value + "age")
            }}
        />
        <span>Thursday </span>
        <input type="number" defaultValue={aaa?.thursdayShift}
            onChange={(event)=>{
                setUpdatedThursdayShift(parseInt(event.target.value));
                console.log(event.target.value + "age")
            }}
        />
        <span>Friday </span>
        <input type="number" defaultValue={aaa?.fridayShift}
            onChange={(event)=>{
                setUpdatedFridayShift(parseInt(event.target.value));
                console.log(event.target.value + "age")
            }}
        />
        <span>Saturday </span>
        <input type="number" defaultValue={aaa?.saturdayShift}
            onChange={(event)=>{
                setUpdatedSaturdayShift(parseInt(event.target.value));
                console.log(event.target.value + "age")
            }}
        />
        <button onClick={() => {updateEmployee()}}>Update</button>
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

export default UpdateEmployeeWorkingTime
