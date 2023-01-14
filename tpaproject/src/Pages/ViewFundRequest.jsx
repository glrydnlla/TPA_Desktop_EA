import React, { useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ViewFundRequest = () => {

    const navigate = useNavigate()

    const q = query(collection(db, "fundRequest"), where("status", "==", "Pending"));

    const [fundRequests, setFundRequests] = useState([])

    useEffect(() => {
        const ViewFundRequest = async () => {
            const querySnapshot = await getDocs(q);
            console.log("query" + querySnapshot)
            setFundRequests(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            console.log(fundRequests);
        }
        ViewFundRequest()
    }, []);

    

    

    


  return (
    <>
      <div>ViewFundRequest</div>
        <div>
        <table>
                <thead>
                <tr>
                    <th>Fund Request ID</th>
                    <th>Department</th>
                    <th>Reason</th>
                    <th>Update Status</th>
                </tr>
                </thead>
                <tbody>
                    {fundRequests.map((fundRequest) => {
                        return (
                            <tr key={fundRequest.id}>
                                <td>{fundRequest.id}</td>
                                <td>{fundRequest.department}</td>
                                <td>{fundRequest.reason}</td>
                                <td>{fundRequest.date.toString}</td>
                                {/* <td>test</td> */}
                                <td><button onClick={()=> {(fundRequest.status==="Pending") ? navigate(`/fundRequest/update/${fundRequest.id}`) : navigate(`/fundRequest`)}}>Update</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default ViewFundRequest
