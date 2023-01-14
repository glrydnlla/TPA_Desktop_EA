import React, { useState } from 'react'
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ViewAllMoviePage = () => {

    const navigate = useNavigate()

    // const q = query(collection(db, "movie"), where("status", "==", "Running"));
    const q = query(collection(db, "movie"));
    const repRef = collection(db, 'movieReport')

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

    
    const generateReport = async (endDate, startDate, totalViewer, totalShow, title, producerID, producerName) => {
        // console.log(endDate);
        // console.log(startDate);
        // console.log(totalViewer);
        // console.log(totalShow);
        // console.log(title);
        // console.log(producerID);
        // console.log(producerName);
        
        await addDoc(repRef, {
            endDate:endDate,
            movieName:title,
            producerID:producerID,
            producerName: producerName,
            startDate:startDate,
            totalShow:totalShow,
            totalViewer:totalViewer
        })
        navigate(`/movie`)
    }
    

    


  return (
    <>
      <div>ViewAllMoviePage</div>
        <div>
        <table>
                <thead>
                <tr>
                    <th>Movie ID</th>
                    <th>Movie Title</th>
                    <th>Duration</th>
                    <th>Producer</th>
                    <th>Status</th>
                    <th>Update Movie</th>
                    <th>Generate Report</th>
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
                                    navigate(`/movie/update/${movie.id}`)
                                    // if (movie.status==='Upcoming') {navigate(`/schedule/${movie.id}`, {state:{id:movie.id}})}
                                    // else if (movie.status==='Running') {navigate(`/viewschedule/${movie.id}`, {state:{id:movie.id}})}
                                    // else {navigate(`/moviereport/${movie.id}`)}
                                    }}>Update</button></td>
                                <td><button onClick={()=> {
                                    // console.log(movie.endDate)
                                    // setEndDate(movie.endDate)
                                    // setStartDate(movie.startDate)
                                    // setTitle(movie.movieName)
                                    // setProducerID(movie.prodID)
                                    // setProducerName(movie.producer)
                                    // setTotalShow(movie.totalShow)
                                    // setTotalViewer(movie.totalViewer)
                                    generateReport(movie.endDate, movie.startDate, movie.totalViewer, 
                                        movie.totalShow, movie.title, movie.prodID, movie.producer)
                                    // console.log("navigating");
                                    // navigate(`/movie/update/${movie.id}`)
                                    // if (movie.status==='Upcoming') {navigate(`/schedule/${movie.id}`, {state:{id:movie.id}})}
                                    // else if (movie.status==='Running') {navigate(`/viewschedule/${movie.id}`, {state:{id:movie.id}})}
                                    // else {navigate(`/moviereport/${movie.id}`)}
                                    }}>Generate Report</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default ViewAllMoviePage
