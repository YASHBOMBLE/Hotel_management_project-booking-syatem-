import React,{useEffect,useState} from 'react'
import "./CreateTable.css"
import axios from 'axios'
import cheackAdmin from "./../util/cheackAdmin"
function CreateTable() {
const [tableNumber,setTableNumber] = useState();

  useEffect(()=>{
   cheackAdmin();
  },[])

 
  
  return (
    <div>
      <input type="number" onChange={(e)=>{EventTarget.value}} />
    </div>
  )
}

export default CreateTable
