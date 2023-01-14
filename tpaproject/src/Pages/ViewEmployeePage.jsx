// import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react'
import { db } from "../firebase-config";
import { collection, getDocs, doc, deleteDoc, query, where } from "firebase/firestore";
import { redirect, useNavigate } from 'react-router-dom';

const ViewEmployeePage = () => {

    
    
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
                    <th>Email</th>
                    <th>Age</th>
                    <th>Role</th>
                    <th>ID</th>
                    <th>Phone Number</th>
                    <th>Shift</th>
                    <th>Salary</th>
                    <th>Warning Letter Count</th>
                    <th>Update</th>
                
                </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => {
                        return (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.age}</td>
                                <td>{employee.role}</td>
                                <td>{employee.phoneNumber}</td>
                                <td>{employee.shift}</td>
                                <td>{employee.salary}</td>
                                <td>{employee.warningLetterCount}</td>
                                <td><button onClick={()=> {console.log("navigating"); navigate(`/employee/update/${employee.id}`)}}>Update</button></td>
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

export default ViewEmployeePage
// export const [employees, setEmployees] = useState([]);
