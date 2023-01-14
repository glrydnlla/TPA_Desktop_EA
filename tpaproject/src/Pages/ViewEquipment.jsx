import React, { useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import {toCanvas} from 'qrcode'
import { ReactDOM } from 'react';
import {QRCodeProps} from 'react-qr-code'
import QRCode from 'qrcode'
import QrGen from '../QrGen';

const ViewAllEquipment = () => {

    const navigate = useNavigate()

    const q = query(collection(db, "equipment"));

    const [equipment, setEquipment] = useState([])
    const [text, setText] = useState("");
  const canvasRef = useRef();

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
        {/* <script src=
            "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js">
        </script> */}
      <div>ViewAllEquipment</div>
        <div>
        <table>
                <thead>
                <tr>
                    <th>Equipment ID</th>
                    <th>Equipment QR</th>
                    <th>Equipment</th>
                    <th>Stock</th>
                </tr>
                </thead>
                <tbody>
                    {equipment.map((f) => {
                        return (
                            <tr key={f.id}>
                                <td>{f.id}</td>
                                {/* <td><canvas value={toCanvas(canvasRef.current, f.id, (error) => error && console.error(error))}/></td> */}
                                {/* <td><canvas id='qrcode'/></td> */}
                                <td><QrGen text={f.id}/></td>
                                <td>{f.name}</td>
                                <td>{f.stock}</td>
                                {/* <td><button onClick={}/></td> */}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        {/* <script>
            var qrcode = new QRCode("qrcode", "https://www.geeksforgeeks.org");
        </script> */}
    </>
  )
}

export default ViewAllEquipment
