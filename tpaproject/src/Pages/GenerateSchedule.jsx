import React, { useState, useEffect } from 'react'
import { addDoc, collection, query, where, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase-config'
// import ConditionalLink from '../ConditionalLink'
import { useNavigate, useParams } from 'react-router-dom'

const GenerateSchedule = () => {

    const p = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState("");
    // const [duration, setDuration] = useState(0);
    // const [producer, setProducer] = useState("");
    // const [status, setStatus] = useState("");
    // const [totalviewer, setTotalViewer] = useState(0);
    const [totalShow, setTotalShow] = useState(0);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const currDate = new Date().getTime;

    const movieDoc = doc(db, "movie", p.id)
    const [movie, setMovie] = useState();

    const movieRef = collection(db, "movieSchedule");
    const q = query(collection(db, "movie"), where("schedule", "=", "Pending"));

    useEffect(() => {
        const getMovie = async () => {
            const querySnapshot = await getDoc(movieDoc);
            console.log("query" + querySnapshot)
            setMovie(querySnapshot.data())
            // console.log(movie);
        }
        getMovie()
    }, []);

    const createEmployee = async () => {
        // console.log(duration+"duration");
        // console.log(producer+"Producer");
        // console.log(title+"title");
        // console.log(startDate+"Date1")
        // console.log(endDate+"Date2")
        // console.log(currDate+"Datecurr")
        // console.log(totalShow+"show");
        if (startDate!=="" && 
            endDate!=="" &&
            totalShow>0 && totalShow<7) {
                const newStartDate = new Date(startDate).getTime()
                const newEndDate = new Date(endDate).getTime()
                console.log(newStartDate+" start");
                console.log(newEndDate+ " end");
                const diff = Math.floor((newEndDate-newStartDate) / (1000 * 60 * 60 * 24)) + 1;
                // console.log("if 1 " + newStartDate>currDate);
                console.log("if 2 " + diff);
                if (new Date(startDate)>new Date() && new Date(endDate)>new Date(startDate)) {
                    // console.log("yes")
                    let date = new Date(startDate)
                    for (let i = 0; i < diff; i++) {
                        for (let j = 0; j < totalShow; j++) {
                            
                            let randomShift = Math.floor((Math.random() * 6)) + 1
                            let randomStudio = Math.floor((Math.random() * 4)) + 1
                            
                            await addDoc(movieRef, {movieID: p.id, 
                                                        movieTitle: movie?.title, 
                                                        studio: randomStudio, 
                                                        shift: randomShift,
                                                        occupiedSeat: 0,
                                                        date:date.toLocaleDateString()});
                            console.log(date.toLocaleDateString());
                            
                        }
                        date.setDate(date.getDate()+1)
                        console.log("success add")
                    }
                    await updateDoc(movieDoc, {status:"Generated"})
                    navigate(`/movieSchedule`)
                    
                }
            }

    }

  return (
    <>
        <div>Generate Movie Schedule Page</div>
        <div>
            <p>Title: {movie?.title}</p>
            
            <p>Start Date</p>
            <input type="datetime-local" onChange={(event) => {
                setStartDate(event.target.value);
            }}/>
            <p>End Date</p>
            <input type="datetime-local" onChange={(event) => {
                setEndDate(event.target.value);
            }}/>
            <p>Total Show Per Day</p>
            <input type="number" onChange={(event) => {
                setTotalShow(event.target.value);
            }}/>
            {/* <ConditionalLink to="/employee"> */}
                <button onClick={createEmployee}>Insert Data</button>
            {/* </ConditionalLink> */}
        </div>
    </>
  )
}

export default GenerateSchedule