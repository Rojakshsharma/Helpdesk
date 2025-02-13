import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
function Ticketslist() {
    const state = useLocation()
    const [data , setData] = useState([])
    const handlerFunction = () =>{
        setData((prev)=>[...prev,state.state])
    }

    useEffect(()=>{
        handlerFunction()
    },[state])

  return (
    <div className="p-5">
        <div>
            <h1 className='text-2xl m-2'>User ticket List</h1>

            <div className='p-1 md:p-5  '>
                {
                    data.map((item,index)=>(
                        <div key = {index} className='text-[15px] lg:text-xl'>
                            <p>Customer Name: <span>{item.firstname} {item.lastname}</span></p>
                            <p>Ticket Id: <span>{item.id}</span></p>
                            <p>Title: <span>{item.title}</span></p>
                            <p>Status: <span>{item.status}</span></p>
                            <p>Title: <span>{item.title}</span></p>
                            <p>Query: <span>{item.query}</span></p>

                            <button className='bg-blue-500 py-2 px-2 text-white rounded mt-4'>Add Note</button>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Ticketslist