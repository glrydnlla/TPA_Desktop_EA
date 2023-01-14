import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase-config'
// import ConditionalLink from '../ConditionalLink'
import { useNavigate } from 'react-router-dom'

const CreatePromo = () => {

    const navigate = useNavigate()
    
    const [promoName, setPromoName] = useState("");
    const [promoDesc, setPromoDesc] = useState("");
    const [promoCategory, setPromoCategory] = useState("Discount");
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const currDate = new Date();

    const promoRef = collection(db, "promo");




    const createPromoInsert = async () => {
        // console.log(duration+"duration");
        // console.log(producer+"Producer");
        // console.log(title+"title");
        // console.log(startDate+"Date1")
        // console.log(endDate+"Date2")
        console.log(currDate+"Datecurr")
        // console.log(totalShow+"show");
        if (promoName!=="" && promoDesc!=="" && promoCategory!=="" && startDate!=="" && endDate!=="") {
                const sDate = new Date(startDate)
                const eDate = new Date(endDate)
                // const newEndDate = new Date(endDate)
                // console.log(newStartDate+" start");
                // console.log(newEndDate+ " end");
                // console.log("if 1 " + newStartDate>currDate);
                // console.log("if 2 " + newEndDate>startDate);
                if (sDate>currDate && eDate > sDate) {
                    console.log("yes")
                    await addDoc(promoRef, {name: promoName, 
                                            desc: promoDesc,
                                            category: promoCategory, 
                                            startDate: startDate,
                                            endDate: endDate});
                    console.log("success add")
                    navigate(`/promo`)
                }
            }

    }

  return (
    <>
        <div>Create Promo</div>
        <div>
            <p>Name</p>
            <input type="text" onChange={(event) => {
                setPromoName(event.target.value);
            }}/>
            <p>Description</p>
            <input type="text" onChange={(event) => {
                setPromoDesc(event.target.value);
            }}/>
            <p>Category</p>
            {/* <input type="text" onChange={(event) => {
                setPromoName(event.target.value);
            }}/> */}
            <select name="" id="" defaultValue={'0000'} onChange={(event) => {
                console.log(event.target.value)
                setPromoCategory(event.target.value)
                // if (updatedStatus!=="Pending") setSel(true)
            }}>
                <option value="Discount" id='0000'>Discount</option>
                <option value="Cashback" id='1111'>Cashback</option>
            </select>
            <p>Start Date</p>
            <input type="date" onChange={(event) => {
                setStartDate(event.target.value);
            }}/>
            <p>End Date</p>
            <input type="date" onChange={(event) => {
                setEndDate(event.target.value);
            }}/>
            {/* <ConditionalLink to="/employee"> */}
                <button onClick={createPromoInsert}>Insert Data</button>
            {/* </ConditionalLink> */}
        </div>
    </>
  )
}

export default CreatePromo