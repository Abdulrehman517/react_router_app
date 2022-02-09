import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import LoginForm from "./components/ContactUs";
import Parent from "./components/Parent";

export default function App() {
  return (
    <>
      <Navbar />
      {/* <LogInForm /> */}
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="about" element={<About />}>
          About Us
        </Route>
        <Route path="contact" element={<LoginForm />}>
          Login
        </Route>
        <Route path="parent" element={<Parent />}>
          Parent
        </Route>
      </Routes>
    </>
  );
}
