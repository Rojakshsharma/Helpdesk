import React, { useContext, useEffect, useState } from "react";
import { IoMdMail } from "react-icons/io";
import axios from "axios";
import { UserContext } from "../context/Context";
import { toast } from "react-toastify";
function Agent() {
  const [data, setData] = useState([]);
  const { url } = useContext(UserContext);
  const getTicketList = async () => {
    try {
      const response = await axios.get(`${url}/ticket/list`);
  
      if (response.data.success) {
        setData(response.data.ticket);
      } else {
        console.log("error occured");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTicketList();
  }, []);

  const handleStatusChange = async (newStatus, email) => {
    try {
      const response = await axios.patch(`${url}/ticket/update`, {
        email: email,
        status: newStatus,
      });
      console.log(response)
      if (response.data.success) {
        toast.success("Updated successfully")
        setData((prevData) =>
          prevData.map((ticket) =>
            ticket.email === email ? { ...ticket, status: newStatus } : ticket
          )
        );
      } else {
        console.log("Error updating status");
      }
    } catch (error) {
      console.error("Error updating ticket:", error);
    }
  };

  return (
    <div className="p-5">
      <div>
        <h1 className=" lg:text-2xl">Ticket list from Customers</h1>

        <div className="p-1 md:p-5 ">
          {data.map((item, index) => (
            <div key={index} className="text-[10px] lg:text-xl mb-5">
              <p>
                Customer Name:{" "}
                <span>
                  {item.firstname} {item.lastname}
                </span>
              </p>
              <p>
                Ticket Id: <span>{item._id.slice(-3)}</span>
              </p>
              <p>
                Title: <span>{item.title}</span>
              </p>
              <p>
                Status:
                <select
                  name="status"
                  className="bg-blue-100 p-1 rounded ml-2"
                  value={item.status}
                  onChange={(e) =>
                    handleStatusChange(e.target.value, item.email)
                  }
                >
                  <option value={item.status}>{item.status}</option>
                  {["pending", "active", "closed"]
                    .filter((status) => status !== item.status)
                    .map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                </select>

                <span className="ml-2 text-gray-600">Last updated on : {item.date.split('T')[0]}</span>
              </p>
              <p>
                Title: <span>{item.title}</span>
              </p>
              <p>
                Query: <span>{item.query}</span>
              </p>
              <p>
                Email:{" "}
                <span>
                  {item.email} <IoMdMail className="inline cursor-pointer" />
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Agent;
