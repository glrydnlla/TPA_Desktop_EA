// import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import { employees } from './ViewEmployeePage';
import React, { useEffect, useState } from 'react'
import { db } from "../firebase-config";
import { collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { async } from '@firebase/util';
// import { useNavigate } from 'react-router-dom';

const UpdateFundRequestStatus = () => {

    // const updateEmployee = async (id) => {
        
        // }
        
    const p = useParams();
    const loc = useLocation();

    const [fundRequests, setFundRequests] = useState([]);
    const dbRef = collection(db, "fundRequest");
    const [employees, setEmployees] = useState([]);
    const dbRefEmployee = collection(db, "employee");
    
    const [aaa, setAaa] = useState();
    
    const aa = doc(db, 'fundRequest', p.id);
    // console.log(p.id)
    const [count, setCount] = useState(0);
    

    useEffect(() => {

        setCount((count) => count + 1);

        const getEmployees = async () => {
            // const fundRequestData = await getDocs(dbRef);
            // console.log(fundRequestData);
            // setFundRequests(fundRequestData.docs.map((doc) => ({...doc.data(), id: doc.id})));
            console.log("TestUpdate");
            // const aa = doc(db, 'fundRequest', p.id);
            // console.log(fundRequests);
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
            getEmployees();
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
    
    const updateFundReqStatus = async (id, status) => {
        // const employeeDoc = doc(db, 'employee', id);
        const fundReqDoc = aa;
        
        
        console.log("count" + count);
        // if (status==="Accept") {
            const newFields = {status:status};
            await updateDoc(fundReqDoc, newFields);
        // }
        // const newFieldsForWL = {status: status};
        // await updateDoc(resignationDoc, newFieldsForWL);
        navigate('/fundRequest')
    }

    const selectedID = "0000"
    const [selectedChoice, setSel] = useState([])

  return (
    <>
        <div>Update Fund Request Status</div>
        <div>Fund Request ID: {p?.id}</div>
        <div>Department: {aaa?.department}</div>
        <div>Reason: {aaa?.reason}</div>
        <div>Resign Date: {aaa?.date.toString()}</div>
        
        <span>Fund Request Status </span>
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
            <button onClick={() => {updateFundReqStatus(aaa?.id, updatedStatus)}}>Update</button>
        </div>
        
    </>
  )
}

export default UpdateFundRequestStatus