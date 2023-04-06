import { useState } from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from './components/Landing';
import Organigrama from './components/Organigrama'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/Organizationchart" element={<Organigrama />} ></Route>
      </Routes>
    </>
  )
}

export default App
