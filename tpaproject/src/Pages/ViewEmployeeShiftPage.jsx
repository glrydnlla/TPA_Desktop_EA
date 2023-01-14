// import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react'
import { db } from "../firebase-config";
import { collection, getDocs, doc, deleteDoc, query, where } from "firebase/firestore";
import { redirect, useNavigate } from 'react-router-dom';

const ViewEmployeeShift = () => {

    
    
    const q = query(collection(db, "employee"), where("employeeStatus", "==", "Active"));
    const [employees, setEmployees] = useState([]);
    const employeesRef = collection(db, "employee");

    useEffect(() => {
        const getEmployees = async () => {
            const employeeData = await getDocs(q);
            console.log(employeeData);
            setEmployees(employeeData.docs.map((doc) => ({...doc.data(), id: doc.id})));
            console.log("Test");
            console.log(employees);
        }

        getEmployees();

    }, []);

    const navigate = useNavigate();

    const deleteEmployee = async (id) => {
        // const employeeDoc = doc(db, 'employee', id);
        // const employeeDoc = doc(db, 'employee', id);
        // await deleteDoc(employeeDoc);
        employees.forEach(element => {
            if ( element.id === id) {
                element.remove()
            }
        });
        navigate(`/employee`)
    }


  return (
    <>
        <div>Active Employee List</div>
        <div>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Update</th>
                    
                </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => {
                        return (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.mondayShift}</td>
                                <td>{employee.tuesdayShift}</td>
                                <td>{employee.wednesdayShift}</td>
                                <td>{employee.thursdayShift}</td>
                                <td>{employee.fridayShift}</td>
                                <td>{employee.saturdayShift}</td>
                                <td><button onClick={()=> {console.log("navigating"); navigate(`/employeeShift/update/${employee.id}`)}}>Update</button></td>
                                {/* <td><button onClick={()=> {deleteEmployee(employee.id)}}>Delete</button></td> */}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default ViewEmployeeShift
// export const [employees, setEmployees] = useState([]);
