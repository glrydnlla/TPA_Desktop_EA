import React, { useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ViewPendingResignationLetter = () => {

    const navigate = useNavigate()

    const q = query(collection(db, "resignationLetter"), where("status", "==", "Pending"));

    const [resignationLetters, setResignationLetters] = useState([])

    useEffect(() => {
        const viewPendingResignationLetter = async () => {
            const querySnapshot = await getDocs(q);
            console.log("query" + querySnapshot)
            setResignationLetters(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            console.log(resignationLetters);
        }
        viewPendingResignationLetter()
    }, []);

    

    

    


  return (
    <>
      <div>ViewPendingResignationLetter</div>
        <div>
        <table>
                <thead>
                <tr>
                    <th>Warning Letter ID</th>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Update Status</th>
                </tr>
                </thead>
                <tbody>
                    {resignationLetters.map((resignationLetter) => {
                        return (
                            <tr key={resignationLetter.id}>
                                <td>{resignationLetter.id}</td>
                                <td>{resignationLetter.employeeID}</td>
                                <td>{resignationLetter.employeeName}</td>
                                <td><button onClick={()=> {console.log("navigating"); navigate(`/resignationletter/update/${resignationLetter.id}`, {state:{id:resignationLetter.id}})}}>Update</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default ViewPendingResignationLetter
