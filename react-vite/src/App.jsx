import React from 'react'

// Page Import
import Home from './pages/Home/Home'
import { Menu } from './components/Menu/Menu'
const App = () => {
  return (
    <div>
      <Menu />
      <Home />
    </div>
  )
}

export default App