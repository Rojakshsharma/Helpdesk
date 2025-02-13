import React, { useEffect, useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { UserContext } from "../context/Context";
import { toast } from "react-toastify";
function Ticket({firstname,lastname,email}) {
     const {url} = useContext(UserContext)
    const [state , setState] = useState(true)
    const [ticket , setTicket] = useState({
        title:'',
        query:'',
        status:'pending',
        firstname:firstname,
        lastname:lastname,
        email:email
    })

    const navigate = useNavigate()

    const ticketSetterFunction = (e)=>{
        setTicket((prev)=>(
            {...prev,[e.target.name]:e.target.value}
        ))
    }

    const submitHanlder = async () => {
      try {
        const response = await axios.post(`${url}/ticket/add`,ticket)
        toast.success("Ticket Created Successfully")
        navigate('/tickets', { state: { ...ticket } })
      } catch (error) {
        console.log(error)
      }
      
  };
  
  return (
    <div className={`bg-blue-100 p-10 ${state?'block':'hidden'}`}>
      <div>
        <p className="text-end text-xl p-1 cursor-pointer"
        onClick={()=>{setState((prev)=>!prev)}}>X</p>
        <h1 className="text-xl mb-5">Details about the issue</h1>
        <div className="grid grid-cols-1 items-center ">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="px-5 py-1 rounded bg-gray-100 outline-none"
            name='title'
            value={ticket.title}
            onChange={ticketSetterFunction}
          />
        </div>

        <div>
          <label className="grid grid-cols-1 items-center " htmlFor="detail">
            Query
          </label>
          <textarea
            className="w-full h-[100px] py-1 rounded bg-gray-100 outline-none"
            name='query'
            value={ticket.query}
            onChange={ticketSetterFunction}
          ></textarea>
        </div>

        <div>
            <button onClick={submitHanlder} className="bg-blue-500 text-white rounded py-2 px-2 mt-2 cursor-pointer">Add ticket</button>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
