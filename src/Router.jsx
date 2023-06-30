import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import RouterLayout from "./common/Routerlayaut";
import About from "./pages/about";
import Course from "./pages/course";
import Contact from "./pages/contact";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};