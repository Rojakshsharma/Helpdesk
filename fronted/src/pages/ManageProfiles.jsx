import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { UserContext } from '../context/Context'
import { toast } from 'react-toastify'

function ManageProfiles() {
    const {url} = useContext(UserContext)
    const [data,setData] = useState([])
    
    const userListHanlder = async ()=>{
        const response = await axios.get(`${url}/user/list`)
        if(response.data.success){
            setData(response.data.users)
        }
        else{
            console.log("some errror happend")
        }
    }

    const userDeleteHanlder = async (email)=>{
        const response = await axios.post(`${url}/user/delete`,{email})
        console.log(response)
        console.log(response.data)
        if(response.data.success){
            toast.success("User is deleted")
            userListHanlder();
        }
        else{
            console.log('An error occured')
        }
        
    }

    useEffect(()=>{
        userListHanlder()
    },[])
  return (
    <div className="p-5">
        <h1 className='text-2xl mb-4'>Available Profiles</h1>
        <div className='space-y-5'>
            {
                data.map((item,index)=>(
                    <div className = 'text-[12px] md:text-xl' key = {index}>
                        <p>Name : <span>{item.firstname} {item.lastname}</span></p>
                        <p>Age : <span>{item.age}</span></p>
                        <p>Gender : <span>{item.gender}</span></p>
                        <p>Email : <span>{item.email}</span></p>
                        <p>Phone : <span>{item.phone}</span></p>
                        <p>Address : <span>{item.address}</span></p>
                        <button onClick = {()=>{userDeleteHanlder(item.email)}} className='bg-blue-500 text-white text-md py-1 px-1 rounded mt-1 cursor-pointer'>Delete Profile</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ManageProfiles