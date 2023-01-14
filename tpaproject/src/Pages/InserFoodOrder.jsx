// import React, { useState } from 'react'
// import { addDoc } from 'firebase/firestore'
// import { db } from '../firebase-config'
// // import ConditionalLink from '../ConditionalLink'
// import { useNavigate } from 'react-router-dom'
// import { useEffect } from 'react'
// import { collection, query, where, getDocs } from "firebase/firestore";

// const InsertFoodOrder = () => {

//     const navigate = useNavigate()
//     // const [name, setName] = useState("");
//     // const [category, setCategory] = useState(0);
    
//     const q = query(collection(db, "food"), where("stock", ">", 0));

//     const [food, setFood] = useState([])

//     useEffect(() => {
//         const viewFood = async () => {
//             const querySnapshot = await getDocs(q);
//             console.log("query" + querySnapshot)
//             setFood(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
//             console.log(food);
//         }
//         viewFood()
//     }, []);



//     const foodQueueRef = collection(db, "foodQueue");

//     const createExternalParty = async (foodName, foodID, quantity) => {
//         // console.log(duration+"duration");
//         // console.log(producer+"Producer");
//         // console.log(title+"title");
//         // console.log(startDate+"Date1")
//         // console.log(endDate+"Date2")
//         // console.log(currDate+"Datecurr")
//         // console.log(totalShow+"show");
//         // if (name!=="" && 
//         //     category!=="") {
                
//                     await addDoc(foodQueueRef, {foodName:foodName, foodID:foodID, quantity:quantity, status:"In Kitchen"})
//                     console.log("success add")
//                     // navigate(`/externalParties`)
//                     // window.location.reload(true)
                
//             // }

//     }

//   return (
//     <>
//         <div>Insert Food Order</div>
//         <div>
//             <p>Name</p>
//             <input type="text" onChange={(event) => {
//                 setName(event.target.value);
//             }}/>
//             <p>Category</p>
//             <select name="" id="" defaultValue={"0000"} onChange={(event) => {
//                 console.log(event.target.value)
//                 setCategory(event.target.value)
//             }}>
//                 <option value="Movie Producer" id='0000'>Movie Producer</option>
//                 <option value="Food and Beverage Supplier" id='1111'>Food and Beverage Supplier</option>
//                 <option value="Advertising Partner" id='2222'>Advertising Partner</option>
//             </select>
            
//             {/* <ConditionalLink to="/employee"> */}
//                 <button onClick={createExternalParty}>Insert Data</button>
//             {/* </ConditionalLink> */}
//         </div>
//     </>
//   )
// }

// export default InsertFoodOrder