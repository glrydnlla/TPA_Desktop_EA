import React, { useState, useEffect } from 'react'
import { addDoc, collection, query, where, doc, getDocs, getDoc, updateDoc } from 'firebase/firestore'
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
    
    const [chosenMovie, setChosenMovie] = useState();

    const q = query(collection(db, "movieSchedule"), where("movieID", "==", p.id));

    useEffect(() => {
        const getMovie = async () => {
            const chosenMovieDoc = await getDoc(movieDoc)
            setChosenMovie(chosenMovieDoc.data())
            const querySnapshot = await getDocs(q);
            console.log("query" + querySnapshot)
            setMovie(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            console.log(movie);
        }
        getMovie()
    }, []);

    

  return (
    <>
        <div>Generated Movie Schedule Page</div>
        <div>
            <p>Title: {chosenMovie?.title}</p>
            
            <p>Start Date: {chosenMovie?.startDate}</p>
            <p>End Date: {chosenMovie?.endDate}</p>
            <p>Total Show Per Day: {chosenMovie?.totalShow}</p>
            
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Studio</th>
                    <th>Shift</th>
                </tr>
                </thead>
                <tbody>
                    {movie?.map((m) => {
                        return (
                            <tr key={m.id}>
                                <td>{m.date}</td>
                                <td>{m.studio}</td>
                                <td>{m.shift}</td>
                                <td><button onClick={()=> {
                                    console.log("navigating");
                                    navigate(`/movieSchedule/update/${m.id}`)
                                    }}>Update</button></td>
                                
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default GenerateSchedule