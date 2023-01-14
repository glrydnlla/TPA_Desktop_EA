import React, { useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ViewRejectWarningLetter = () => {

    const navigate = useNavigate()

    const q = query(collection(db, "warningLetter"), where("status", "==", "Reject"));

    const [warningLetters, setWarningLetters] = useState([])

    useEffect(() => {
        const viewRejectWarningLetter = async () => {
            const querySnapshot = await getDocs(q);
            console.log("query" + querySnapshot)
            setWarningLetters(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            console.log(warningLetters);
        }
        viewRejectWarningLetter()
    }, []);

    

    

    


  return (
    <>
      <div>ViewRejectWarningLetter</div>
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
                                <td><button onClick={()=> {console.log("navigating"); navigate(`/warningletter/update/${warningLetter.id}`, {state:{id:warningLetter.id}})}}>Update</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default ViewRejectWarningLetter