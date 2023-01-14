import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase-config'
// import ConditionalLink from '../ConditionalLink'
import { useNavigate } from 'react-router-dom'

const IssueLeaveRequest = () => {

    const navigate = useNavigate()
    
    const [reason, setReason] = useState(0);
    // const [producer, setProducer] = useState("");
    // const [status, setStatus] = useState("");
    // const [totalviewer, setTotalViewer] = useState(0);
    // const [totalShow, setTotalShow] = useState(0);
    // const [startDate, setStartDate] = useState();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const currDate = new Date();

    const resignRef = collection(db, "leaveRequest");

    const createEmployee = async () => {
        // console.log(duration+"duration");
        // console.log(producer+"Producer");
        // console.log(title+"title");
        // console.log(startDate+"Date1")
        // console.log(endDate+"Date2")
        console.log(currDate+"Datecurr")
        // console.log(totalShow+"show");
        if (reason!=="" && startDate!=="" && endDate!=="") {
                
                const sDate = new Date(startDate)
                const eDate = new Date(endDate)
                
                if (sDate>currDate && eDate > sDate) {
                    console.log("yes")
                    await addDoc(resignRef, {employeeID: sessionStorage.getItem("currID"), 
                                            employeeName: sessionStorage.getItem("currName"),
                                                reason: reason, 
                                                startDate: startDate,
                                                endDate: endDate,
                                                status: "Pending"});
                    console.log("success add")
                    navigate(`/leaveRequest`)
                }
            }

    }

  return (
    <>
        <div>Issue Personal Leave Request</div>
        <div>
            <span>Employee ID: {sessionStorage.getItem("currID")}</span>
            <p>Reason</p>
            <input type="text" onChange={(event) => {
                setReason(event.target.value);
            }}/>
            <p>Start Date</p>
            <input type="date" onChange={(event) => {
                setStartDate(event.target.value);
            }}/>
            <p>End Date</p>
            <input type="date" onChange={(event) => {
                setEndDate(event.target.value);
            }}/>
            {/* <ConditionalLink to="/employee"> */}
                <button onClick={createEmployee}>Insert Data</button>
            {/* </ConditionalLink> */}
        </div>
    </>
  )
}

export default IssueLeaveRequest