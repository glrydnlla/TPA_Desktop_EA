import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase-config'
// import ConditionalLink from '../ConditionalLink'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const InsertExternalParties = () => {

    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [category, setCategory] = useState(0);
    
    useEffect(() => {

        setCategory("Movie Producer")

    }, []);


    const extRef = collection(db, "externalParties");

    const createExternalParty = async () => {
        // console.log(duration+"duration");
        // console.log(producer+"Producer");
        // console.log(title+"title");
        // console.log(startDate+"Date1")
        // console.log(endDate+"Date2")
        // console.log(currDate+"Datecurr")
        // console.log(totalShow+"show");
        if (name!=="" && 
            category!=="") {
                
                    await addDoc(extRef, {name: name, category: category})
                    console.log("success add")
                    navigate(`/externalParties`)
                    
                
            }

    }

  return (
    <>
        <div>Insert External Parties Page</div>
        <div>
            <p>Name</p>
            <input type="text" onChange={(event) => {
                setName(event.target.value);
            }}/>
            <p>Category</p>
            <select name="" id="" defaultValue={"0000"} onChange={(event) => {
                console.log(event.target.value)
                setCategory(event.target.value)
            }}>
                <option value="Movie Producer" id='0000'>Movie Producer</option>
                <option value="Food and Beverage Supplier" id='1111'>Food and Beverage Supplier</option>
                <option value="Advertising Partner" id='2222'>Advertising Partner</option>
            </select>
            
            {/* <ConditionalLink to="/employee"> */}
                <button onClick={createExternalParty}>Insert Data</button>
            {/* </ConditionalLink> */}
        </div>
    </>
  )
}

export default InsertExternalParties