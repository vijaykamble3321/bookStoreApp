import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'; // Correct path to AuthProvider
import Home from './home/Home';
import Courses from './cources/Courses';
import Signup from './components/Signup';
import Contact from './components/contact';

function App() {
  const { auth, login, logout } = useAuth(); // Destructure auth and methods

  return (
    <div className="dark:bg-state-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course"
          element={auth ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Contact />
      <Toaster />
    </div>
  );
}

export default App;
