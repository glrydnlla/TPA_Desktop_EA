// import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import { employees } from './ViewEmployeePage';
import React, { useEffect, useState } from 'react'
import { db } from "../firebase-config";
import { collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { async } from '@firebase/util';
// import { useNavigate } from 'react-router-dom';

const UpdateLeaveRequestStatus = () => {

    // const updateEmployee = async (id) => {
        
        // }
        
    const p = useParams();
    const loc = useLocation();

    const [leaveRequest, setLeaveRequest] = useState([]);
    const dbRef = collection(db, "leaveRequest");
    const [employees, setEmployees] = useState([]);
    const dbRefEmployee = collection(db, "employee");
    
    const [aaa, setAaa] = useState();
    
    const aa = doc(db, 'leaveRequest', p.id);
    // console.log(p.id)
    const [count, setCount] = useState(0);
    

    useEffect(() => {

        setCount((count) => count + 1);

        const getData = async () => {
            // const resignationLetterData = await getDocs(dbRef);
            // console.log(resignationLetterData);
            // setResignationLetters(resignationLetterData.docs.map((doc) => ({...doc.data(), id: doc.id})));
            console.log("TestUpdate");
            // const aa = doc(db, 'resignationLetter', p.id);
            // console.log(resignationLetters);
            const a1 = await getDoc(aa);
            console.log("gfdfgdgfdgfdgfdfg");
            console.log("hhh" + a1.data());
            setAaa(a1.data());
            console.log(aaa);
            // setAaa(a1.data());
            // console.log(a1.data());
        }

        // const getChosenEmployee = onSnapshot(aa, snapshot => {
        //     setAaa(snapshot.data);
        //     console.log(aaa);
        // });

        

        return ()=>{
            getData();
            // getChosenEmployee();
        }

    }, [loc]);
    // console.log(loc.state.id);

    // const employee = employees.find(function (id) {
    //     return id === this.id;
    // });

    // const aa = getFirestore().collection("employee").doc(id).get();
    // const aa = collection(getFirestore(), "users", id, "links");
    // const aa = db.collection('employee').doc(p.id).get();
    // const aa = firebase.firestore().collection("employee").doc(id).get().then((snapshot) => {
    //     console.log(snapshot.data())
    //   });
    // console.log(p);
    
    // console.log(aa);
    //   const q = query(employeesRef, where())

    let [updatedStatus, setUpdatedStatus] = useState("Pending");
    
    const navigate = useNavigate();
    
    const updateLeaveReqStatus = async (status) => {
        // const employeeDoc = doc(db, 'employee', id);
        const fundReqDoc = aa;
        
        
        console.log("count" + count);
        // if (status==="Accept") {
            const newFields = {status:status};
            await updateDoc(fundReqDoc, newFields);
        // }
        // const newFieldsForWL = {status: status};
        // await updateDoc(resignationDoc, newFieldsForWL);
        navigate('/leaveRequest')
    }

    const selectedID = "0000"
    const [selectedChoice, setSel] = useState([])

  return (
    <>
        <div>Update Leave Request Status</div>
        <div>Leave Request ID: {p?.id}</div>
        <div>Employee ID: {aaa?.employeeID}</div>
        <div>Employee Name: {aaa?.employeeName}</div>
        <div>Reason: {aaa?.reason}</div>
        <div>Start Date: {aaa?.startDate.toString()}</div>
        <div>End Date: {aaa?.endDate.toString()}</div>
        
        <span>Leave Request Status </span>
        <select name="" id="" defaultValue={selectedID} onChange={(event) => {
            console.log(event.target.value)
            setUpdatedStatus(event.target.value)
            if (updatedStatus!=="Pending") setSel(true)
        }}>
            <option value="Pending" id='0000'>Pending</option>
            <option value="Revise" id='1111'>Revise</option>
            <option value="Accept" id='2222'>Accept</option>
            <option value="Reject" id='3333'>Reject</option>
        </select>
        <div>
            <button onClick={() => {updateLeaveReqStatus(updatedStatus)}}>Update</button>
        </div>
        
    </>
  )
}

export default UpdateLeaveRequestStatus