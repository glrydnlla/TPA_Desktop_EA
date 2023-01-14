// import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import { employees } from './ViewEmployeePage';
import React, { useEffect, useState } from 'react'
import { db } from "../firebase-config";
import { collection, doc, getDoc, getDocs, updateDoc, query, where } from "firebase/firestore";
import { async } from '@firebase/util';
// import { useNavigate } from 'react-router-dom';

const ViewExternalPartiesReport = () => {

    // const updateEmployee = async (id) => {
        
        // }
        
        const p = useParams();
        const loc = useLocation();
        
        // const [employees, setEmployees] = useState([]);
        // const employeesRef = collection(db, "employee");
        
        // const q = query(collection(db, "report"), where("status", "==", "Accept"));
        // const aa = doc(db, 'externalParties', p.id);
        const [count, setCount] = useState(0);
        
        // const [updatedTitle, setUpdatedTitle] = useState("");
        // const [updatedDuration, setUpdatedDuration] = useState(0);
        // const [updatedProducer, setUpdatedProducer] = useState("");
        const [aaa, setAaa] = useState();
        // let [q, setQuery] = useState;
        const [reportList, setReports] = useState([])
        const queryMovie = query(collection(db, "movieReport"), where("producerID", "==", p.id))
        
    useEffect(() => {
        
        setCount((count) => count + 1);
        
        const getEmployees = async () => {
            // const employeeData = await getDocs(employeesRef);
            // console.log(employeeData);
            // setEmployees(employeeData.docs.map((doc) => ({...doc.data(), id: doc.id})));
            // console.log("TestUpdate");
            // console.log(employees);
            const a1 = await getDoc(doc(db, 'externalParties', p.id));
            // console.log(a1);
            setAaa(a1.data());

            // setUpdatedTitle(a1.data().title)
            // setUpdatedDuration(a1.data().duration)
            // setUpdatedProducer(a1.data().producer)
            // if (a1.data().category === "Movie Producer") {
                //     setQuery(query(collection(db, "movieReport"), where("prodID", "==", a1.data().id)))
            // }
            // // else if (a1.data().category === "Food and Beverage Supplier") {
            // //     setQuery(query(collection(db, "movieReport"), where("prodID", "==", a1.data().id)))
            // // }
            // else if (a1.data().category === "Advertising Partner") {
            //     setQuery(query(collection(db, "advertisementReport"), where("prodID", "==", a1.data().id)))
            // }

            const reports = await getDocs(queryMovie);
            setReports(reports.docs.map((doc) => ({...doc.data(), id: doc.id})))
            console.log(reportList)

            // console.log(a1.data());
        }

        // const getChosenEmployee = onSnapshot(aa, snapshot => {
        //     setAaa(snapshot.data);
        //     console.log(aaa);
        // });

        

        return ()=>{
            getEmployees();
            // getChosenEmployee();
        }

    }, [loc]);

    // const employee = employees.find(function (id) {
    //     return id === this.id;
    // });

    // const aa = getFirestore().collection("employee").doc(id).get();
    // const aa = collection(getFirestore(), "users", id, "links");
    // const aa = db.collection('employee').doc(p.id).get();
    // const aa = firebase.firestore().collection("employee").doc(id).get().then((snapshot) => {
    //     console.log(snapshot.data())
    //   });
    // console.log(p);
    // console.log(aa);
    //   const q = query(employeesRef, where())

    // const [updated, setUpdatedPhone] = useState();
    const navigate = useNavigate();
    
    // const ViewExternalPartiesReportFunc = async (id, updatedTitle, updatedDuration, updatedProducer) => {
    //     // const employeeDoc = doc(db, 'employee', id);
    //     if (updatedDuration > 0 && updatedTitle!=="" && updatedTitle!=="") {
    //         const movieDoc = aa;
    //         const newFields = {title: updatedTitle, duration: updatedDuration, producer:updatedProducer};
    //         await updateDoc(movieDoc, newFields);
    //         navigate('/movie/view')
    //     }
    // }


    
  return (
    <>
        <div>View Report</div>
        <div>Partner ID: {p.id}</div>
        <div>Partner Name: {aaa?.name}</div>
        <div>Category: {aaa?.category}</div>
        <div>
        <table>
                <thead>
                <tr>
                    <th>Report ID</th>
                    <th>Movie Title</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Total Show</th>
                    <th>Total Viewer</th>
                    {/* <th>Delete</th> */}
                </tr>
                </thead>
                <tbody>
                    {reportList?.map((e) => {
                        return (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.movieName}</td>
                                <td>{e.startDate}</td>
                                <td>{e.endDate}</td>
                                <td>{e.totalShow}</td>
                                <td>{e.totalViewer}</td>
                                {/* <td><button onClick={()=> {console.log("navigating"); navigate(`/externalParties/report/${externalParties.id}`)}}>View Report</button></td> */}
                                {/* <td><button onClick={()=> {deleteExternalParties(externalParties.id)}}>Delete</button></td> */}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        
        
        {/* <button onClick={() => {ViewExternalPartiesReportFunc(aaa?.id, updatedTitle, updatedDuration, updatedProducer)}}>Update</button> */}
        {/* <div>{id}</div> */}
        {/* <div>{aa}</div> */}
        {/* {employees.map((employee) => { */}
            {/* return ( */}
                {/* <div key = {employee.id}> */}
                {/* <div>
                    <p>{employee.name}</p>
                    <p>{employee.email}</p>
                    <p>{employee.age}</p>
                    <p>{employee.role}</p>
                </div> */}
            {/* ) */}
        {/* })} */}
        {/* <div></div>
        <div>{employees[id-1].id}</div>
        <div>{employees[id-1].name}</div> */}
    </>
  )
}

export default ViewExternalPartiesReport