import React, { useState } from 'react'
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ViewGeneratedMovie = () => {

    const navigate = useNavigate()

    // const q = query(collection(db, "movie"), where("status", "==", "Running"));
    const q = query(collection(db, "movie"), where("schedule", "==", "Generated"));
    // const repRef = collection(db, 'movieReport')

    const [movies, setMovies] = useState([])
    const [title, setTitle] = useState("");
    // const [duration, setDuration] = useState(0);
    const [producerName, setProducerName] = useState("");
    const [producerID, setProducerID] = useState("");
    // const [status, setStatus] = useState("");
    const [totalViewer, setTotalViewer] = useState(0);
    const [totalShow, setTotalShow] = useState(0);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    useEffect(() => {
        const ViewAllMovie = async () => {
            const querySnapshot = await getDocs(q);
            console.log("query" + querySnapshot)
            setMovies(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            console.log(movies);
        }
        ViewAllMovie()
    }, []);

    
    
  return (
    <>
      <div>ViewGeneratedMovie</div>
        <div>
        <table>
                <thead>
                <tr>
                    <th>Movie ID</th>
                    <th>Movie Title</th>
                    <th>Duration</th>
                    <th>Producer</th>
                    <th>Status</th>
                    <th>Generate</th>
                </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => {
                        return (
                            <tr key={movie.id}>
                                <td>{movie.id}</td>
                                <td>{movie.title}</td>
                                <td>{movie.duration}</td>
                                <td>{movie.producer}</td>
                                <td>{movie.status}</td>
                                <td><button onClick={()=> {
                                    console.log("navigating");
                                    navigate(`/movieSchedule/view/generated/${movie.id}`)
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

export default ViewGeneratedMovie
