import React, {useState} from "react";
import "./style.css";

export default function App() {
 const data= {fname:'',lname:'',phone:'',age:''}
  const[studentData,setStudentData]=useState([{fname:'Rohan',lname:'kumar', phone:1234567890 ,age:24}])
  return (
   <>
   
   <form action="submit" onSubmit={(e) => e.preventDefault()} >

   <input type="text" onChange={(e)=>{data.fname=e.target.value}} placeholder='first name' type='text'/>
   <input type="text" placeholder='last name'  onChange={(e)=>{data.lname=e.target.value}} type='text'/>
   <input type="number" placeholder='phone number'  onChange={(e)=>{data.phone=e.target.value}} type='number' />
   <input type="text" placeholder='age'  onChange={(e)=>{data.age=e.target.value}}  type='number'/>
   <button onClick={()=>{setStudentData([data, ...studentData])}}>click</button>
   </form>

   
    <tr>
      <th>firstname</th>
      <th>lastname</th>
      <th>phone</th>
      <th>age</th>
    </tr>



   
    
{studentData.map((ele,index)=><tr key={index}><td >{ele.fname}</td>
                          <td>{ele.lname}</td> 
                          <td>{ele.phone}</td>
                          <td>{ele.age}</td></tr>)}
   


   </>
  );
}
