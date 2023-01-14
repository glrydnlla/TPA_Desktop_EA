import React, { useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ViewAllFood = () => {

    const navigate = useNavigate()

    const q = query(collection(db, "food"));

    const [food, setFood] = useState([])

    useEffect(() => {
        const viewFood = async () => {
            const querySnapshot = await getDocs(q);
            console.log("query" + querySnapshot)
            setFood(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            console.log(food);
        }
        viewFood()
    }, []);

    

    

    


  return (
    <>
      <div>ViewAllFood</div>
        <div>
        <table>
                <thead>
                <tr>
                    <th>Food ID</th>
                    <th>Menu</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Stock</th>
                </tr>
                </thead>
                <tbody>
                    {food.map((f) => {
                        return (
                            <tr key={f.id}>
                                <td>{f.id}</td>
                                <td>{f.menu}</td>
                                <td>{f.desc}</td>
                                <td>{f.price}</td>
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

export default ViewAllFood
