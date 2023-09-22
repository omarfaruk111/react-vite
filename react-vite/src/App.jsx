import { useState, useEffect } from 'react'
import Home from './pages/Home/Home'
import Preloader from './components/Preloader/Preloader'

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }, []);

  return (
    <div>
       {/* {isLoading ? <Preloader /> : <Home />} */}
       <Home/>
      
    </div>
  )
}

export default App