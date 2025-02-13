import React, { useState } from "react";
import Ticket from "./Ticket";
import { useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();
  const [modal,setModal] = useState(false)
  return (
    <div className="mt-4 lg:mt-10 relative p-5">
      <div>
        <h1 className="text-2xl py-4">User Profile</h1>

        <div className="flex justify-between">
          <div>
            <div className="text-[15px] lg:text-xl space-y-2">
              <p>
                Name :{" "}
                <span>
                  {" "}
                  {location.state.firstname} {location.state.lastname}{" "}
                </span>
              </p>
              <p>
                Gender : <span>{location.state.gender} </span>
              </p>
              <p>
                Age : <span>{location.state.age} </span>
              </p>
              <p>
                Email: <span>{location.state.email} </span>
              </p>
              <p>
                Phone :<span>{location.state.phone} </span>
              </p>
              <p>
                Address :<span> {location.state.address} </span>
              </p>
            </div>

            <div className="mt-2 text-xl">
              <button className="bg-blue-500 text-white px-2 py-2 rounded cursor-pointer text-[12px] md:text-xl"
              onClick={()=>{setModal((prev)=>!prev)}}>
                Add a new Support ticket
              </button>
            </div>
          </div>

        
        </div>

        <div className="absolute w-full lg:w-[50%] top-0">
            {
            modal? <Ticket firstname={location.state.firstname} lastname={location.state.lastname} email = {location.state.email}></Ticket> : ""
            }
        </div>
      </div>
    </div>
  );
}

export default Profile;
