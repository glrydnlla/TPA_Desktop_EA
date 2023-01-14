// import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import { employees } from './ViewEmployeePage';
import React, { useEffect, useState } from 'react'
import { db } from "../firebase-config";
import { collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { async } from '@firebase/util';
// import { useNavigate } from 'react-router-dom';

const UpdateSalaryRequestStatus = () => {

    // const updateEmployee = async (id) => {
        
        // }
        
    const p = useParams();
    const loc = useLocation();

    const [salaryAdjustmentRequests, setResignationLetters] = useState([]);
    const dbRef = collection(db, "salaryAdjustmentRequest");
    const [employees, setEmployees] = useState([]);
    const dbRefEmployee = collection(db, "employee");
    
    const [aaa, setAaa] = useState();
    
    const aa = doc(db, 'salaryRequest', p.id);
    // console.log(p.id)
    const [count, setCount] = useState(0);
    

    useEffect(() => {

        setCount((count) => count + 1);

        const getEmployees = async () => {
            // const salaryAdjustmentRequestData = await getDocs(dbRef);
            // console.log(salaryAdjustmentRequestData);
            // setResignationLetters(salaryAdjustmentRequestData.docs.map((doc) => ({...doc.data(), id: doc.id})));
            console.log("TestUpdate");
            // const aa = doc(db, 'salaryAdjustmentRequest', p.id);
            // console.log(salaryAdjustmentRequests);
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
    
    const updateSalaryReqStatus = async (status) => {
        // const employeeDoc = doc(db, 'employee', id);
        const salaryReqDoc = aa;
        
        
        console.log("count" + count);
        // if (status==="Accept") {
            const newFields = {status:status};
            await updateDoc(salaryReqDoc, newFields);
            if (status==="Accept") {
                await updateDoc(doc(db, "employee", sessionStorage.getItem("currID")), {salary:aaa?.newSalary})
            }
        // }
        // const newFieldsForWL = {status: status};
        // await updateDoc(resignationDoc, newFieldsForWL);
        navigate('/salaryRequest')
    }

    const selectedID = "0000"
    const [selectedChoice, setSel] = useState([])

  return (
    <>
        <div>Update Salary Adjustment Request Status</div>
        <div>Salary Adjustment Request ID: {p?.id}</div>
        <div>Employee ID: {aaa?.employeeID}</div>
        <div>Employee Name: {aaa?.employeeName}</div>
        <div>Reason: {aaa?.reason}</div>
        <div>Old Salary: {aaa?.oldSalary}</div>
        <div>Requested Salary: {aaa?.newSalary}</div>
        
        <span>Salary Adjustment Request Status </span>
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
            <button onClick={() => {updateSalaryReqStatus(updatedStatus)}}>Update</button>
        </div>
        
    </>
  )
}

export default UpdateSalaryRequestStatus