import React, { useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ViewReviseTerminationLetter = () => {

    const navigate = useNavigate()

    const q = query(collection(db, "terminationLetter"), where("status", "==", "Revise"));

    const [terminationLetters, setTerminationLetters] = useState([])

    useEffect(() => {
        const viewReviseTerminationLetter = async () => {
            const querySnapshot = await getDocs(q);
            console.log("query" + querySnapshot)
            setTerminationLetters(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            console.log(terminationLetters);
        }
        viewReviseTerminationLetter()
    }, []);

    

    

    


  return (
    <>
      <div>ViewReviseTerminationLetter</div>
        <div>
        <table>
                <thead>
                <tr>
                    <th>Termination Letter ID</th>
                    <th>Employee Name</th>
                    <th>Update Status</th>
                </tr>
                </thead>
                <tbody>
                    {terminationLetters.map((terminationLetter) => {
                        return (
                            <tr key={terminationLetter.id}>
                                <td>{terminationLetter.id}</td>
                                <td>{terminationLetter.employeeName}</td>
                                <td><button onClick={()=> {console.log("navigating"); navigate(`/terminationletter/update/${terminationLetter.id}`, {state:{id:terminationLetter.id}})}}>Update</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default ViewReviseTerminationLetter