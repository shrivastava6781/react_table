import React from 'react'
import Table from './Components/Table/Table'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ExcelFilePage from './Pages/ExcelFilePage'

const App = () => {
  return (
   <BrowserRouter>
     <Routes>
        <Route path="/" element={<Table />} />
     </Routes>
   </BrowserRouter>
  )
}

export default App