import React from "react";
import Agent from "./Agent";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
function Admin() {
  const navigate = useNavigate()

  const manageProfileHanlder = ()=>{
    navigate('/manage-profiles')
  }

  const createProfileHanlder = ()=>{
    navigate('/user')
  }

  return (
    <div>
      <div className=" group py-5 absolute  right-5 top-5  text-black bg-blue-100 px-2 text-xl rounded ">
        <div className="flex justify-center gap-2 group cursor-pointer">
          <FaUser className="mt-1" />
          <p>Dashboard</p>

          <div className="absolute right-0 mt-10 w-52 bg-blue-100 text-black px-4 py-4 text-lg rounded shadow-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div>
            <p>Total Profile : 21</p>
            <p>Total Tickets : 34</p>
          </div>

          <div className="flex flex-col text-[15px] space-y-2">
            <button onClick={createProfileHanlder} className="bg-blue-500 text-white py-2 cursor-pointer rounded">
              Create Profile
            </button>
            <button onClick={manageProfileHanlder}  className="bg-blue-500 text-white py-2 cursor-pointer rounded">
              Manage Profiles
            </button>
          </div>
        </div>
        </div>
       
      </div>
      <Agent></Agent>
    </div>
  );
}

export default Admin;
