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
        
        
        const aa = doc(db, 'movie', p.id);
        const [count, setCount] = useState(0);
        
        const [updatedTitle, setUpdatedTitle] = useState("");
        const [updatedDuration, setUpdatedDuration] = useState(0);
        const [updatedProducer, setUpdatedProducer] = useState("");
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
            setUpdatedTitle(a1.data().title)
            setUpdatedDuration(a1.data().duration)
            setUpdatedProducer(a1.data().producer)
            
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
    
    const UpdateMovieFunc = async (id, updatedTitle, updatedDuration) => {
        // const employeeDoc = doc(db, 'employee', id);
        if (updatedDuration > 0 && updatedTitle!=="" && updatedTitle!=="") {
            const movieDoc = aa;
            const newFields = {title: updatedTitle, duration: updatedDuration};
            await updateDoc(movieDoc, newFields);
            navigate('/movie/view')
        }
    }


    
  return (
    <>
        <div>Update Movie Data</div>
        <div>{aaa?.title}</div>
        <div>{aaa?.id}</div>
        <span>Title </span>
        <input type="text"  defaultValue={aaa?.title}
            onChange={(event)=>{
                setUpdatedTitle(event.target.value);
            }}
        />
        {/* <span>Producer </span>
        <input type="text"  defaultValue={aaa?.producer}
            onChange={(event)=>{
                setUpdatedProducer(event.target.value);
            }}
        /> */}
        <span>Duration </span>
            <input type="number" defaultValue={aaa?.duration}
                onChange={(event)=>{
                    setUpdatedDuration(event.target.value);
                }}
            />
        
        
        <button onClick={() => {UpdateMovieFunc(aaa?.id, updatedTitle, updatedDuration, updatedProducer)}}>Update</button>
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