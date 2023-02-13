import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./BookTable.css"
import TableCard from '../../component/TableCard/TableCard';
import Navbar from "./../../component/Navbar/Navbar"
import { currentUser } from '../util/currentUser';
import Footer from '../../component/Footer/Footer';
function BookTable() {
  const [currentTable, setAvailableTables] = useState([]);
  async function allTables() {
    const response = await axios.get('/availableTables')
    console.log(response.data.data);
    setAvailableTables(response.data.data)
  }
  useEffect(() => {
    allTables()
  }, [])
  return (
    
      <div className=''>
        <Navbar user={currentUser?.name}/>
       <div className='title-container' >
           Book Table 
       </div>
        <div className=' conatiner row '>
          <hr />
          <div className='conatiner-title'>Available Tables</div>
          <hr />
        {
          currentTable?.map((tableItem, index) => {
            if (tableItem.occupied == false) {
              localStorage.setItem("tableNumber",JSON.stringify(tableItem.tableNumber))
              return (<TableCard tableNumber={tableItem.tableNumber} userId={tableItem._id} />)
            }
          })
        }
        </div>
        <Footer />
      </div>
     
  )
}

export default BookTable
