import React, { useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ViewLeaveRequest = () => {

    const navigate = useNavigate()

    const q = query(collection(db, "leaveRequest"), where("status", "==", "Pending"));

    const [leaveRequests, setLeaveRequests] = useState([])

    useEffect(() => {
        const viewPendingLeaveRequest = async () => {
            const querySnapshot = await getDocs(q);
            console.log("query" + querySnapshot)
            setLeaveRequests(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            console.log(leaveRequests);
        }
        viewPendingLeaveRequest()
    }, []);

    

    

    


  return (
    <>
      <div>ViewLeaveRequest</div>
        <div>
        <table>
                <thead>
                <tr>
                    <th>Leave Request ID</th>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Reason</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Update Status</th>
                </tr>
                </thead>
                <tbody>
                    {leaveRequests.map((leaveRequest) => {
                        return (
                            <tr key={leaveRequest.id}>
                                <td>{leaveRequest.id}</td>
                                <td>{leaveRequest.employeeID}</td>
                                <td>{leaveRequest.employeeName}</td>
                                <td>{leaveRequest.reason}</td>
                                <td>{leaveRequest.startDate}</td>
                                <td>{leaveRequest.endDate}</td>
                                <td><button onClick={()=> {console.log("navigating"); if (leaveRequest.status!=="Accept") navigate(`/leaveRequest/update/${leaveRequest.id}`, {state:{id:leaveRequest.id}})}}>Update</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default ViewLeaveRequest

