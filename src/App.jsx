import { useState } from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from './components/Landing';
import Organigrama from './components/Organigrama'
import Nav from './components/Nav';


function App() {

  const { pathname } = useLocation
  const location = useLocation()
  console.log(location.pathname)

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/Organizationchart" element={<Organigrama />} ></Route>
      </Routes>
    </>
  )
}

export default App
