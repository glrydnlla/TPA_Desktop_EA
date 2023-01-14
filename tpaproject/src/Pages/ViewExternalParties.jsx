// import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react'
import { db } from "../firebase-config";
import { collection, getDocs, doc, deleteDoc, query, where } from "firebase/firestore";
import { redirect, useNavigate } from 'react-router-dom';

const ViewExternalPartiesPage = () => {

    
    
    // const q = query(collection(db, "externalParties"));
    const [externalParties, setExternalParties] = useState([]);
    const extRef = collection(db, "externalParties");

    useEffect(() => {
        const getExternalParties = async () => {
            const externalPartiesData = await getDocs(extRef);
            console.log(externalPartiesData);
            setExternalParties(externalPartiesData.docs.map((doc) => ({...doc.data(), id: doc.id})));
            console.log("Test");
            // console.log(employees);
        }

        getExternalParties();

    }, []);

    const navigate = useNavigate();

    const deleteExternalParties = async (id) => {
        // const employeeDoc = doc(db, 'employee', id);
        // const employeeDoc = doc(db, 'employee', id);
        // await deleteDoc(employeeDoc);
        
        externalParties.forEach(element => {
            if ( element.id === id) {
                element.remove()
            }
        });
        navigate(`/externalParties`)
    }


  return (
    <>
        <div>Active ExternalParties List</div>
        <div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>View Report</th>
                    {/* <th>Delete</th> */}
                </tr>
                </thead>
                <tbody>
                    {externalParties.map((e) => {
                        return (
                            <tr key={e.id}>
                                <td>{e.name}</td>
                                <td>{e.category}</td>
                                <td><button onClick={()=> {console.log("navigating"); navigate(`/externalParties/report/${e.id}`)}}>View Report</button></td>
                                {/* <td><button onClick={()=> {deleteExternalParties(externalParties.id)}}>Delete</button></td> */}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default ViewExternalPartiesPage
// export const [employees, setExternalPartiess] = useState([]);
