import React, { useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ViewMembership = () => {

    const navigate = useNavigate()

    const q = query(collection(db, "membership"));

    const [membership, setMembership] = useState([])

    useEffect(() => {
        const viewMembership = async () => {
            const querySnapshot = await getDocs(q);
            console.log("query" + querySnapshot)
            setMembership(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            console.log(membership);
        }
        viewMembership()
    }, []);

    

    

    


  return (
    <>
      <div>ViewMembership</div>
        <div>
        <table>
                <thead>
                <tr>
                    <th>Membership ID</th>
                    <th>Customer Name</th>
                    <th>Customer Birthday</th>
                    <th>Phone Number</th>
                    <th>Point</th>
                </tr>
                </thead>
                <tbody>
                    {membership.map((f) => {
                        return (
                            <tr key={f.id}>
                                <td>{f.id}</td>
                                <td>{f.customerName}</td>
                                <td>{f.birthday}</td>
                                <td>{f.phoneNumber}</td>
                                <td>{f.point}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default ViewMembership
