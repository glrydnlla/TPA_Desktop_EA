import React, { useState, useEffect } from 'react'
import { addDoc, collection, doc } from 'firebase/firestore'
import { db } from '../firebase-config'
// import ConditionalLink from '../ConditionalLink'
import { useNavigate } from 'react-router-dom'
import { getDoc } from 'firebase/firestore'

const InsertSalaryRequest = () => {

    const navigate = useNavigate()
    
    const [reason, setReason] = useState("");
    const [oldSalary, setOldSalary] = useState();
    const [newSalary, setNewSalary] = useState();
    
    // const [producer, setProducer] = useState("");
    // const [status, setStatus] = useState("");
    // const [totalviewer, setTotalViewer] = useState(0);
    // const [totalShow, setTotalShow] = useState(0);
    // const [startDate, setStartDate] = useState();
    // const [date, setDate] = useState();
    // const currDate = new Date();
    
    const salaryRequestRef = collection(db, "salaryRequest");

    useEffect(() => {

        

        const getEmployees = async () => {
            
            const a1 = await getDoc(doc(db, "employee", sessionStorage.getItem("currID")));
            setOldSalary(a1.data().salary)
            console.log(a1.data());
            // setAaa(a1.data());
            // console.log(a1.data());

        }

        // const getChosenEmployee = onSnapshot(aa, snapshot => {
        //     setAaa(snapshot.data);
        //     console.log(aaa);
        // });

        

        return ()=>{
            getEmployees();
            // getChosenEmployee();
        }

    }, []);

    const createSalaryRequest = async () => {
        // console.log(duration+"duration");
        // console.log(producer+"Producer");
        // console.log(title+"title");
        // console.log(startDate+"Date1")
        // console.log(endDate+"Date2")
        // console.log(currDate+"Datecurr")
        // console.log(totalShow+"show");
        if (reason!=="" && newSalary!==0) {
                // const inputDate = new Date(date)
                // const newEndDate = new Date(endDate)
                // console.log(newStartDate+" start");
                // console.log(newEndDate+ " end");
                // console.log("if 1 " + newStartDate>currDate);
                // console.log("if 2 " + newEndDate>startDate);
                // if (inputDate>currDate) {
                    console.log("yes")
                    await addDoc(salaryRequestRef, {employeeID: sessionStorage.getItem("currID"), 
                                            employeeName: sessionStorage.getItem("currName"),
                                                reason: reason, 
                                                newSalary: newSalary,
                                                oldSalary: oldSalary,
                                                status: "Pending"});
                    console.log("success add")
                    navigate(`/salaryRequest`)
                // }
            }

    }

  return (
    <>
        <div>Issue Salary Adjustment Request</div>
        <div>
            <span>Employee ID: {sessionStorage.getItem("currID")}</span>
            <p>Old Salary: {oldSalary}</p>
            <p>Reason</p>
            <input type="text" onChange={(event) => {
                setReason(event.target.value);
            }}/>
            <p>Request Salary</p>
            <input type="number" onChange={(event) => {
                setNewSalary(event.target.value);
            }}/>
            {/* <ConditionalLink to="/employee"> */}
                <button onClick={createSalaryRequest}>Insert Data</button>
            {/* </ConditionalLink> */}
        </div>
    </>
  )
}

export default InsertSalaryRequest