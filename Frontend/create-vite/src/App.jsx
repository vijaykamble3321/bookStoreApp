import React from "react";
import Home from "./home/Home";
import {Route, Routes } from "react-router-dom";
import Courses from "./cources/Courses";
import Signup from "./components/Signup";
import Contact from "./components/contact";



function App() {
  return (
  <>
  
  <div className="dark:bg-state-900 dark:text-white">
 <Routes>
    <Route path="/"element={<Home/>}/>
    <Route path="/cource" element={<Courses/>}/>
     <Route path="/signup" element={<Signup/>}/>
        </Routes>
        <Contact />
        
 </div>
    </>
  );
}

export default App;
