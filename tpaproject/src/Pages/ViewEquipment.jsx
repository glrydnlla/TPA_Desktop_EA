import React, { useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ViewAllEquipment = () => {

    const navigate = useNavigate()

    const q = query(collection(db, "equipment"));

    const [equipment, setEquipment] = useState([])

    useEffect(() => {
        const viewEquipment = async () => {
            const querySnapshot = await getDocs(q);
            console.log("query" + querySnapshot)
            setEquipment(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            console.log(equipment);
        }
        viewEquipment()
    }, []);

    

    

    


  return (
    <>
      <div>ViewAllEquipment</div>
        <div>
        <table>
                <thead>
                <tr>
                    <th>Equipment ID</th>
                    <th>Equipment</th>
                    <th>Stock</th>
                </tr>
                </thead>
                <tbody>
                    {equipment.map((f) => {
                        return (
                            <tr key={f.id}>
                                <td>{f.id}</td>
                                <td>{f.name}</td>
                                <td>{f.stock}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default ViewAllEquipment
