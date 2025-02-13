import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div className='md:pt-10 text-center bg-blue-500 md:w-[100px] lg:w-[200px] h-[100vh] '>
        <Link to='/' className=' cursor pointer  text-sm md:text-xl lg:text-2xl text-center text-white block mt-5 font-bold tracking-wider'>HELPDESK</Link>
        <div  className='w-full flex justify-center '>
            <ul className='text-sm md:text-xl space-y-10 mt-8'>
                <Link to="/user" className=' cursor-pointer border px-4 py-1 block text-white'>USER</Link>
                <Link to="/agent"className='cursor-pointer border px-4 py-2 block  text-white'>AGENT</Link>
                <Link to="/admin"className='cursor-pointer border px-4 py-2 block  text-white'>ADMIN</Link>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar