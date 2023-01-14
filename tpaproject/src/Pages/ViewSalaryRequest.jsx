import React, { useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ViewSalaryRequest = () => {

    const navigate = useNavigate()

    const q = query(collection(db, "salaryRequest"), where("status", "==", "Pending"));

    const [salaryRequests, setSalaryRequest] = useState([])

    useEffect(() => {
        const viewAcceptSalaryRequest = async () => {
            const querySnapshot = await getDocs(q);
            console.log("query" + querySnapshot)
            setSalaryRequest(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            console.log(salaryRequests);
        }
        viewAcceptSalaryRequest()
    }, []);

    

    

    


  return (
    <>
      <div>ViewSalaryRequest</div>
        <div>
        <table>
                <thead>
                <tr>
                    <th>Salary Request ID</th>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Update Status</th>
                </tr>
                </thead>
                <tbody>
                    {salaryRequests.map((salaryRequest) => {
                        return (
                            <tr key={salaryRequest.id}>
                                <td>{salaryRequest.id}</td>
                                <td>{salaryRequest.employeeID}</td>
                                <td>{salaryRequest.employeeName}</td>
                                <td><button onClick={()=> {console.log("navigating"); navigate(`/salaryRequest/update/${salaryRequest.id}`, {state:{id:salaryRequest.id}})}}>Update</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default ViewSalaryRequest
