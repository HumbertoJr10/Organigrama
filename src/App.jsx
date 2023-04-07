import { useState } from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from './components/Landing';
import Organigrama from './components/Organigrama'
import Nav from './components/Nav';
import Filtro from './components/Filtro';


function App() {

  const location = useLocation()


  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/Organizationchart" element={<Organigrama />} ></Route>
        <Route path='/filter' element={<Filtro />} ></Route>
      </Routes>
    </>
  )
}

export default App
