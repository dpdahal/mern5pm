import React from 'react';
import {Routes, Route} from "react-router-dom";
import HomeComponents from '../pages/HomeComponents';

export default function RouteComponents() {
  return (
    <>
        <Routes>
            <Route path="/"  element={<HomeComponents/>} />
        </Routes>

    </>
  )
}
