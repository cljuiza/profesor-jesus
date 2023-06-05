import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import  RouterLayout  from "./common/Routerlayaut";

export const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<RouterLayout/>}>
          <Route path="/" element={<Home/>}/> 
        </Route>
      </Routes>
  );
};