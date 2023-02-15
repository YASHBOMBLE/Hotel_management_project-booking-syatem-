import React,{useEffect,useState} from 'react'
import "./CreateTable.css"
import axios from 'axios'
import { cheackAdmin } from '../../util/cheackAdmin';
import { NavigationType } from 'react-router-dom';
import swal from 'sweetalert';
function CreateTable() {
const [tableNumber,setTableNumber] = useState('');

  useEffect(()=>{
    cheackAdmin();
  },[])
 

 

 async function createdTable(){
  const response = await axios.post('/createTable',{
    tableNumber:tableNumber
  })
  const result=response.data.success;
 }
  return (
    <div>
       <input type='text' placeholder='Enter tableNumber' 
                  value={Text} onChange={(e) => setTableNumber(e.target.value)} />
                  <button onClick={createdTable}> Create Table</button>
    </div>
  )
}

export default CreateTable
