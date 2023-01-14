import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase-config'
import ConditionalLink from '../ConditionalLink'
import { useNavigate } from 'react-router-dom'

const InsertFoodPage = () => {

    const [newMenu, setNewMenu] = useState("");
    const [newPrice, setNewPrice] = useState(0);
    const [newStock, setNewStock] = useState(0);
    const [newDesc, setNewDesc] = useState("");
    const navigate = useNavigate()


    const foodRef = collection(db, "food");

    const createFood = async () => {
        if (newMenu!=="" && newPrice!==0 && newDesc!=="" && newStock!==0) {
            await addDoc(foodRef, {menu: newMenu, 
                price: newPrice, 
                stock: newStock, 
                desc: newDesc});
            navigate(`/food`)
        }
    }

  return (
    <>
        <div>Insert Food Page</div>
        <div>
            <p>Menu</p>
            <input type="text" onChange={(event) => {
                setNewMenu(event.target.value);
            }}/>
            <p>Menu Description</p>
            <input type="text" onChange={(event) => {
                setNewDesc(event.target.value);
            }}/>
            <p>Price</p>
            <input type="number" onChange={(event) => {
                setNewPrice(event.target.value);
            }}/>
            <p>Stock</p>
            <input type="number" onChange={(event) => {
                setNewStock(event.target.value);
            }}/>
            {/* <ConditionalLink to="/employee"> */}
                <button onClick={createFood}>Insert Data</button>
            {/* </ConditionalLink> */}
        </div>
    </>
  )
}

export default InsertFoodPage