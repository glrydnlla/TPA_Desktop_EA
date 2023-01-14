import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase-config'
// import ConditionalLink from '../ConditionalLink'
import { useNavigate } from 'react-router-dom'

const CreateFundRequest = () => {

    const navigate = useNavigate()
    
    const [reason, setReason] = useState(0);
    // const [producer, setProducer] = useState("");
    // const [status, setStatus] = useState("");
    // const [totalviewer, setTotalViewer] = useState(0);
    // const [totalShow, setTotalShow] = useState(0);
    // const [startDate, setStartDate] = useState();
    const [date, setDate] = useState();
    const currDate = new Date();

    const fundRef = collection(db, "fundRequest");

    const createFundRequest = async () => {
        // console.log(duration+"duration");
        // console.log(producer+"Producer");
        // console.log(title+"title");
        // console.log(startDate+"Date1")
        // console.log(endDate+"Date2")
        console.log(currDate+"Datecurr")
        // console.log(totalShow+"show");
        if (reason!=="" && date!=="") {
                const inputDate = new Date(date)
                // const newEndDate = new Date(endDate)
                // console.log(newStartDate+" start");
                // console.log(newEndDate+ " end");
                // console.log("if 1 " + newStartDate>currDate);
                // console.log("if 2 " + newEndDate>startDate);
                if (inputDate>currDate) {
                    console.log("yes")
                    await addDoc(fundRef, {department: sessionStorage.getItem("currentRole"), 
                                                reason: reason, 
                                                date: date,
                                                status: "Pending"});
                    console.log("success add")
                    navigate(`/fundRequest`)
                }
            }

    }

  return (
    <>
        <div>Issue Resignation Letter</div>
        <div>
            <span>Current Department: {sessionStorage.getItem("currentRole")}</span>
            <p>Reason</p>
            <input type="text" onChange={(event) => {
                setReason(event.target.value);
            }}/>
            <p>Date</p>
            <input type="date" onChange={(event) => {
                setDate(event.target.value);
            }}/>
            {/* <ConditionalLink to="/employee"> */}
                <button onClick={createFundRequest}>Insert Data</button>
            {/* </ConditionalLink> */}
        </div>
    </>
  )
}

export default CreateFundRequest