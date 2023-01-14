import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase-config'
import ConditionalLink from '../ConditionalLink'
import { useNavigate } from 'react-router-dom'

const InsertMembership = () => {

    const [newName, setNewName] = useState("");
    const [newDOB, setNewDOB] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const navigate = useNavigate()


    const membershipRef = collection(db, "membership");

    const createMembership = async () => {
        if (newName!=="" && newDOB!=="" && newPhone!=="") {
            await addDoc(membershipRef, {customerName: newName, 
                birthday: newDOB, 
                phoneNumber: newPhone, 
                point: 0});
            navigate(`/membership`)
        }
    }

  return (
    <>
        <div>Insert Membership Page</div>
        <div>
            <p>Name</p>
            <input type="text" onChange={(event) => {
                setNewName(event.target.value);
            }}/>
            <p>Birthday</p>
            <input type="date" onChange={(event) => {
                setNewDOB(event.target.value);
            }}/>
            <p>Phone Number</p>
            <input type="text" onChange={(event) => {
                setNewPhone(event.target.value);
            }}/>
            
            {/* <ConditionalLink to="/employee"> */}
                <button onClick={createMembership}>Insert Data</button>
            {/* </ConditionalLink> */}
        </div>
    </>
  )
}

export default InsertMembership