import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marque from './components/marque'
import Textsection from './components/Textsection'


const App = () => {
  
  return (
    <div>
      <Navbar />
      <Landingpage/>
      <Marque/>
      <Textsection/>
    </div>
  )
}

export default App