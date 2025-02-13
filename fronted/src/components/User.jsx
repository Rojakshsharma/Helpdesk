import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/Context";
import axios from 'axios'
import { toast } from 'react-toastify'
function User() {

  const {url} = useContext(UserContext)
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
  });

  const navigate = useNavigate();

  const setterFunction = (e) => {
    e.preventDefault();
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/api/user/add`, data)
      if((await response).data.success){
        toast.success("Profile is created")
        navigate("/profile", { state: data });
      }
      else{
        console.log(response)
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error)
    }
  };

  return (
    <div className="p-5">
      <div>
        <div className="mb-2">
          <h1 className="text-2xl md:text-[2rem]">Welcome to HELPDESK</h1>
        </div>

        <div>
          <form onSubmit={submitHandler}>
            <div className="space-y-2 md:space-y-5 w-[300px] lg:w-[500px] bg-blue-100 p-5 text-md">
              <div className="grid grid-cols-1 items-center ">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="px-5 py-1 rounded bg-gray-100 outline-none"
                  name="firstname"
                  value={data.firstname}
                  onChange={setterFunction}
                  required
                />
              </div>

              <div className="grid grid-cols-1 items-center">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="px-5 py-1 rounded bg-gray-100 outline-none"
                  name="lastname"
                  value={data.lastname}
                  onChange={setterFunction}
                  required
                />
              </div>

              <div className="grid grid-cols-1 items-center">
                <label htmlFor="lastName">Age</label>
                <input
                  type="number"
                  className="px-5 py-1 rounded bg-gray-100 outline-none"
                  name="age"
                  value={data.age}
                  onChange={setterFunction}
                  required
                />
              </div>

              <div className="grid grid-cols-1 items-center">
                <label htmlFor="lastName">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  className="px-5 py-1 rounded bg-gray-100 outline-none"
                  value={data.gender}
                  onChange={setterFunction}
                >
                  <option value=""></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 items-center">
                <label htmlFor="mail">Email</label>
                <input
                  type="email"
                  className="px-5 py-1 rounded bg-gray-100 outline-none"
                  name="email"
                  value={data.email}
                  onChange={setterFunction}
                  required
                />
              </div>

              <div className="grid grid-cols-1 items-center">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className="px-5 py-1 rounded bg-gray-100 outline-none"
                  name="phone"
                  value={data.phone}
                  onChange={setterFunction}
                  required
                />
              </div>

              <div className="grid grid-cols-1 items-center">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className=" px-5 py-1 rounded bg-gray-100 outline-none"
                  name="address"
                  value={data.address}
                  onChange={setterFunction}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="rounded py-2 px-2 text-xl  mt-4 cursor-pointer bg-blue-500 outline-none text-white"
            >
              Create Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
