import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase-config'
import ConditionalLink from '../ConditionalLink'
import { useNavigate } from 'react-router-dom'

const InsertEmployeePage = () => {

    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState(0);
    const [newSalary, setNewSalary] = useState(0);
    // const [newShift, setNewShift] = useState(0);
    const [newEmail, setNewEmail] = useState("");
    const [newRole, setNewRole] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const navigate = useNavigate()


    const employeesRef = collection(db, "employee");

    const createEmployee = async () => {
        if (newName!=="" && newEmail!=="" && newRole!=="" && newPhone!=="" && newAge!==0 && newSalary!==0) {
            await addDoc(employeesRef, {name: newName, 
                age: newAge, 
                email: newEmail, 
                role: newRole, 
                phoneNumber: newPhone,
                employeeStatus:"Active",
                mondayShift:1,
                tuesdayShift:1,
                wednesdayShift:1,
                thursdayShift:1,
                fridayShift:1,
                saturdayShift:1,
                salary: newSalary,
                warningLetterCount:0 });
            navigate(`/employee`)
        }
    }

  return (
    <>
        <div>InsertEmployeePage</div>
        <div>
            <p>Name</p>
            <input type="text" onChange={(event) => {
                setNewName(event.target.value);
            }}/>
            <p>Age</p>
            <input type="number" onChange={(event) => {
                setNewAge(event.target.value);
            }}/>
            <p>Email</p>
            <input type="email" onChange={(event) => {
                setNewEmail(event.target.value);
            }}/>
            <p>Phone Number</p>
            <input type="text" onChange={(event) => {
                setNewPhone(event.target.value);
            }}/>
            <p>Role</p>
            <input type="text" onChange={(event) => {
                setNewRole(event.target.value);
            }}/>
            <p>Salary</p>
            <input type="number" onChange={(event) => {
                setNewSalary(event.target.value);
            }}/>
            {/* <ConditionalLink to="/employee"> */}
                <button onClick={createEmployee}>Insert Data</button>
            {/* </ConditionalLink> */}
        </div>
    </>
  )
}

export default InsertEmployeePage