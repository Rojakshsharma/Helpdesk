import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import Sidebar from "./components/Sidebar";
import User from './components/User'
import Agent from "./components/Agent";
import Admin from "./components/Admin";
import Profile from "./pages/Profile";
import Ticketlist from './pages/Ticketslist'
import {Routes, Route } from "react-router-dom";
import ManageProfiles from "./pages/ManageProfiles";
import Hero from "./components/Hero";

function App() {
  return (

      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
          <Route path="/" element={<Hero/>} />
            <Route path="/user" element={<User />} />
            <Route path="/agent" element={<Agent/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/tickets" element={<Ticketlist/>}></Route>
            <Route path="/manage-profiles" element={<ManageProfiles/>}></Route>
          </Routes>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
  
  );
}

export default App;
