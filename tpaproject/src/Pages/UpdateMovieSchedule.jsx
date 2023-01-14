// import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import { employees } from './ViewEmployeePage';
import React, { useEffect, useState } from 'react'
import { db } from "../firebase-config";
import { collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { async } from '@firebase/util';
// import { useNavigate } from 'react-router-dom';

const UpdateMovie = () => {

    // const updateEmployee = async (id) => {
        
        // }
        
        const p = useParams();
        const loc = useLocation();
        
        // const [employees, setEmployees] = useState([]);
        // const employeesRef = collection(db, "employee");
        
        
        const aa = doc(db, 'movieSchedule', p.id);
        const [count, setCount] = useState(0);
        
        const [updatedDate, setUpdatedDate] = useState();
        const [updatedStudio, setUpdatedStudio] = useState();
        const [updatedShift, setUpdatedShift] = useState();
        const [aaa, setAaa] = useState();

    useEffect(() => {

        setCount((count) => count + 1);

        const getEmployees = async () => {
            // const employeeData = await getDocs(employeesRef);
            // console.log(employeeData);
            // setEmployees(employeeData.docs.map((doc) => ({...doc.data(), id: doc.id})));
            // console.log("TestUpdate");
            // console.log(employees);
            const a1 = await getDoc(aa);
            console.log(a1);
            setAaa(a1.data());
            setUpdatedDate(a1.data().date)
            setUpdatedShift(a1.data().shift)
            setUpdatedStudio(a1.data().studio)
            
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
    // console.log(aa);
    //   const q = query(employeesRef, where())

    // const [updated, setUpdatedPhone] = useState();
    const navigate = useNavigate();
    
    const UpdateMovieScheduleFunc = async () => {
        // const employeeDoc = doc(db, 'employee', id);
        if (updatedShift > 0 && updatedShift<7 && updatedStudio>0 && updatedStudio<5) {
            const movieDoc = aa;
            const newFields = {studio: updatedStudio, shift: updatedShift};
            await updateDoc(movieDoc, newFields);
            navigate(`/movieSchedule/view/generated/${aaa?.movieID}`)
        }
    }


    
  return (
    <>
        <div>Update Movie Data</div>
        <div>Movie ID: {aaa?.movieID}</div>
        <div>Movie title: {aaa?.movieTitle}</div>
        <span>Date </span>
        <input type="date"  defaultValue={aaa?.date}
            onChange={(event)=>{
                setUpdatedDate(event.target.value);
            }}
        />
        {/* <span>Producer </span>
        <input type="text"  defaultValue={aaa?.producer}
            onChange={(event)=>{
                setUpdatedProducer(event.target.value);
            }}
        /> */}
        <span>Studio </span>
            <input type="number" defaultValue={aaa?.studio}
                onChange={(event)=>{
                    setUpdatedStudio(event.target.value);
                }}
            />
        <span>Shift </span>
            <input type="number" defaultValue={aaa?.shift}
                onChange={(event)=>{
                    setUpdatedShift(event.target.value);
                }}
            />
        
        <button onClick={() => {UpdateMovieScheduleFunc()}}>Update</button>
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

export default UpdateMovie