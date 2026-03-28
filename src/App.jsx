import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import PostDetails from './Pages/PostDetails'
import { useThemeStore } from './store/useThemeStore'

function App() {
  const { initTheme } = useThemeStore()

  useEffect(() => {
    initTheme()
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=':id' element={<PostDetails />} />
      </Route>
    </Routes>
  )
}

export default App