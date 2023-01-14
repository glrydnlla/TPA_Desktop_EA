import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase-config'
import ConditionalLink from '../ConditionalLink'
import { useNavigate } from 'react-router-dom'

const InsertFacilityPage = () => {

    const [newEquipment, setNewEquipment] = useState("");
    // const [newPrice, setNewPrice] = useState(0);
    const [newQuantity, setNewQuantity] = useState(0);
    // const [newDesc, setNewDesc] = useState("");
    const navigate = useNavigate()


    const facilityRef = collection(db, "facility");

    const createFacility = async () => {
        if (newEquipment!=="" && newQuantity!==0) {
            await addDoc(facilityRef, {name: newEquipment,
                stock: newQuantity});
            navigate(`/facility`)
        }
    }

  return (
    <>
        <div>Insert Facility Page</div>
        <div>
            <p>Equipment</p>
            <input type="text" onChange={(event) => {
                setNewEquipment(event.target.value);
            }}/>
            <p>Quantity</p>
            <input type="number" onChange={(event) => {
                setNewQuantity(event.target.value);
            }}/>
            {/* <ConditionalLink to="/facility"> */}
                <button onClick={createFacility}>Insert Data</button>
            {/* </ConditionalLink> */}
        </div>
    </>
  )
}

export default InsertFacilityPage