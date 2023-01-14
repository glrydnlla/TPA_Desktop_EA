import React, { useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ViewAcceptWarningLetter = () => {

    const navigate = useNavigate()

    const q = query(collection(db, "warningLetter"), where("status", "==", "Accept"));

    const [warningLetters, setWarningLetters] = useState([])

    useEffect(() => {
        const viewAcceptWarningLetter = async () => {
            const querySnapshot = await getDocs(q);
            console.log("query" + querySnapshot)
            setWarningLetters(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            console.log(warningLetters);
        }
        viewAcceptWarningLetter()
    }, []);

    

    

    


  return (
    <>
      <div>ViewAcceptWarningLetter</div>
        <div>
        <table>
                <thead>
                <tr>
                    <th>Warning Letter ID</th>
                    <th>Employee Name</th>
                    <th>Update Status</th>
                </tr>
                </thead>
                <tbody>
                    {warningLetters.map((warningLetter) => {
                        return (
                            <tr key={warningLetter.id}>
                                <td>{warningLetter.id}</td>
                                <td>{warningLetter.employeeName}</td>
                                <td>{warningLetter.status}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default ViewAcceptWarningLetter