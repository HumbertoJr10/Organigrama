import { useState } from 'react'
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Game />}></Route>
      </Routes>
    </>
  )
}

export default App
