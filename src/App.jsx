import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import About from './pages/About.jsx'
import Today from './pages/Today.jsx'
import Stats from './pages/Stats.jsx'

export default function App() {
  const location = useLocation()
  return (
    <Routes location={location}>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/today" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/today" element={<Today />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="*" element={<Navigate to="/today" replace />} />
      </Route>
    </Routes>
  )
}
