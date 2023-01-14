import React from 'react'
import { useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase-config';
import { useState } from 'react';
import { getDocs, getDoc, doc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ConditionalLink from '../ConditionalLink';
// import Date
import { query, where } from "firebase/firestore";

const IssueTerminationLetter = () => {
    
    const [employees, setEmployees] = useState([]);
    const [chosenEmployee, setChosenEmployee] = useState({});
    const employeesRef = collection(db, "employee");
    const [terminationLetter, setTerminationLetter] = useState([]);
    const terminationRef = collection(db, "terminationLetter");
    const [name, setName] = useState("");
    const [briefDesc, setBriefDesc] = useState("");
    const [details, setDetails] = useState("");
    const [date, setDate] = useState(new Date());
    const [sel, setSel] = useState();
    const queryEmployee = query(collection(db, "employee"), where("name", "==", name));
    const queryEligibleEmployee = query(collection(db, "employee"), where("warningLetterCount", ">=", 3));
    const navigate = useNavigate()
    
    useEffect(() => {
        const getEmployees = async () => {
            const employeeData = await getDocs(queryEligibleEmployee);
            console.log(employeeData);
            setEmployees(employeeData.docs.map((doc) => ({...doc.data(), id: doc.id})));
            console.log("Test");
            console.log(employees);
        }
        
        getEmployees();
        
    }, []);
    
    const createTerminationLetter = async () => {
        if (name!=="n0tn4me") {
            const querySnapshot = await getDocs(queryEmployee);
            const arr = []
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              arr.push(doc)
            });
            console.log("before selected id")
            const selectedID = arr[0].id;
            // const selectedID = querySnapshot.id;
            console.log("selected id " + selectedID)
            addDoc(terminationRef, {employeeID: selectedID, 
                                employeeName: name,
                                briefDescription: briefDesc, 
                                issuedDate: date, 
                                terminationDetails: details, 
                                status: "Pending"})
            // const employeeDoc = doc(db, 'employee', selectedID);
            // const newFieldsEmployee = {employeeStatus:"Terminated"};
            // await updateDoc(employeeDoc, newFieldsEmployee);
                navigate(`/terminationLetter`)
        }
        
    }
    
    const selectedID = "0000";

    return (
        <>
            <div>Issue Termination Letter</div>
            <p>Employee</p>
            <select name="" id="" defaultValue={selectedID} onChange={(event) => {
                console.log(event.target.value)
                setName(event.target.value)
                setChosenEmployee(event.target.value)
                if (name!=="n0tn4me") setSel(true);
            }}>
                {employees.map((employee) => {
                    return (
                        <option value={employee.name}>
                            {employee.name}
                        </option>
                    )
                })}
                <option value="n0tn4me" id='0000'>Select an employee</option>
            </select>
            <p>Brief Description</p>
            <input type="text" onChange={(event) => {
                setBriefDesc(event.target.value);
            }}/>
            <p>Date</p>
            <input type="datetime-local" onChange={(event) => {
                setDate(event.target.value);
            }}/>
            <p>Details</p>
            <input type="text" onChange={(event) => {
                setDetails(event.target.value);
            }}/>
            {/* <ConditionalLink to="/terminationletter" condition={sel&&(briefDesc!=="")&&(details!=="")&&(date!=="")}> */}
                <button onClick={createTerminationLetter}>
                    Issue Termination Letter
                </button>
            {/* </ConditionalLink> */}
        </>
    )
}


export default IssueTerminationLetter




