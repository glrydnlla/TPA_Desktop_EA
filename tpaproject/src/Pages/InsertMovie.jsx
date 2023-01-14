import React, { useState, useEffect } from 'react'
import { addDoc, collection, getDoc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase-config'
// import ConditionalLink from '../ConditionalLink'
import { useNavigate } from 'react-router-dom'

const InsertMovie = () => {

    const navigate = useNavigate()
    const [title, setTitle] = useState("");
    const [duration, setDuration] = useState(0);
    const [producer, setProducer] = useState("");
    const [status, setStatus] = useState("");
    const [totalviewer, setTotalViewer] = useState(0);
    const [totalShow, setTotalShow] = useState(0);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const currDate = new Date();
    const [producerList, setProducerList] = useState()
    const [producerID, setProducerID] = useState()
    const movieRef = collection(db, "movie");
    const extRef = collection(db, "externalParties");

    useEffect(() => {

        const getEmployees = async () => {
            // const employeeData = await getDocs(employeesRef);
            // console.log(employeeData);
            // setEmployees(employeeData.docs.map((doc) => ({...doc.data(), id: doc.id})));
            // console.log("TestUpdate");
            // console.log(employees);
            // const a1 = await getDoc(aa);
            // 
            const producerDocs = await getDocs(query(collection(db, "externalParties"), where("category", "==", "Movie Producer")))
            // setProducerList(producerDocs)
            setProducerList(producerDocs.docs.map((doc) => ({...doc.data(), id: doc.id})))
            console.log(producerList);
            // console.log(a1);
            // setAaa(a1.data());
            // setUpdatedTitle(a1.data().title)
            // setUpdatedDuration(a1.data().duration)
            // // setUpdatedProducer(a1.data().producer)
            // if (a1.data().category === "Movie Producer") {
            //     setQuery(query(collection(db, "movieReport"), where("prodID", "==", a1.data().id)))
            // }
            // // else if (a1.data().category === "Food and Beverage Supplier") {
            // //     setQuery(query(collection(db, "movieReport"), where("prodID", "==", a1.data().id)))
            // // }
            // else if (a1.data().category === "Advertising Partner") {
            //     setQuery(query(collection(db, "advertisementReport"), where("prodID", "==", a1.data().id)))
            // }

            // const reports = getDocs(q);
            // setReports(reports)

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

    }, []);


    const createEmployee = async () => {
        console.log(duration+"duration");
        console.log(producer+"Producer");
        console.log(title+"title");
        console.log(startDate+"Date1")
        console.log(endDate+"Date2")
        console.log(currDate+"Datecurr")
        console.log(totalShow+"show");
        if (duration>0 && 
            producer!=="" && 
            title!=="") {
                // const newStartDate = new Date(startDate)
                // const newEndDate = new Date(endDate)
                // console.log(newStartDate+" start");
                // console.log(newEndDate+ " end");
                // console.log("if 1 " + newStartDate>currDate);
                // console.log("if 2 " + newEndDate>startDate);
                // if (newStartDate>currDate && newEndDate>newStartDate) {
                    console.log("yes")
                    const prodID = 
                    await addDoc(movieRef, {duration: duration, 
                                                producer: producer, 
                                                prodID:producerID,
                                                status: "Upcoming", 
                                                schedule:"Pending",
                                                title: title, 
                                                totalViewer: 0,
                                                totalShow:0,
                                                startDate:"",
                                                endDate:""});
                    console.log("success add")
                    navigate(`/movie`)
                    
                // }
            }

    }

  return (
    <>
        <div>InsertMoviePage</div>
        <div>
            <p>Title</p>
            <input type="text" onChange={(event) => {
                setTitle(event.target.value);
            }}/>
            <p>Producer</p>
            <select name="" id="" defaultValue={"0000"} onChange={(event) => {
            console.log(event.target.value)
            setProducer(event.target.value)
            let prID;
            producerList?.forEach(element => {
                if (element.name === event.target.value) {
                    prID = element.id
                }
            });
            setProducerID(prID)
            // if (name!=="n0tn4me") setSel(true);
        }}>
            {producerList?.map((producer) => {
                return (
                    <option value={producer.name}>
                        {producer.name}
                    </option>
                )
            })}
            <option value="n0tn4me" id='0000'>Select a movie producer</option>
        </select>
            <p>Duration</p>
            <input type="number" onChange={(event) => {
                setDuration(event.target.value);
            }}/>
            
            {/* <ConditionalLink to="/employee"> */}
                <button onClick={createEmployee}>Insert Data</button>
            {/* </ConditionalLink> */}
        </div>
    </>
  )
}

export default InsertMovie