import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marque from './components/marque'
import Textsection from './components/Textsection'
import Play from './components/Play'
import Featured from './components/Featured'
import Clientreview from './components/Clientreview'


const App = () => {
  
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Landingpage/>
      <Marque/>
      <Textsection/>
      <Play/>
      <Featured/>
      <Clientreview/>
    </div>
  )
}

export default App