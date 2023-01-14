import React, { useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import QrGen from '../QrGen';

const ViewPromo = () => {

    const navigate = useNavigate()

    const q = query(collection(db, "promo"));

    const [promo, setPromo] = useState([])

    useEffect(() => {
        const viewPromo = async () => {
            const querySnapshot = await getDocs(q);
            console.log("query" + querySnapshot)
            setPromo(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            console.log(promo);
        }
        viewPromo()
    }, []);

    

    

    


  return (
    <>
      <div>ViewPromo</div>
        <div>
        <table>
                <thead>
                <tr>
                    <th>Promo ID</th>
                    <th>Promo</th>
                    <th>QR code</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                </tr>
                </thead>
                <tbody>
                    {promo.map((f) => {
                        return (
                            <tr key={f.id}>
                                <td>{f.id}</td>
                                <td>{f.name}</td>
                                <td><QrGen text={f.id}/></td>
                                <td>{f.desc}</td>
                                <td>{f.category}</td>
                                <td>{f.startDate}</td>
                                <td>{f.endDate}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default ViewPromo
