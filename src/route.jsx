import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Home2 from './home2'

export default function Rotas() {
  return (
    <Routes>
      <Route element={Home2} path="/home2"/>
      <Route element={Home} path="/"/>
    </Routes>
  )
}
