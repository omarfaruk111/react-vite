import React from 'react'

// Page Import
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import { Example } from './components/Menu/Example'
// import Gallery from './components/Gallery/Gallery'
import Book from './components/Booking/Book'
const App = () => {
  return (
    <div>
      <Book />
      {/* <Gallery /> */}
      <Example />
      {/* <Home /> */}
      {/* <Header /> */}


    </div>
  )
}

export default App