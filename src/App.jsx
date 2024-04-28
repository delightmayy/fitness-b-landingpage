import React from 'react'
import './App.css'
import Hero from './component/hero'
import Programs from './component/Programs'
import Whyus from './component/Whyus'
import Journey from './component/Journey'
import Footer from './component/Footer'

export default function App() {
  const [iniWidth, setiniWidth] = React.useState(window.innerWidth);
  return (
  <div className='App'>
    <Hero  iniWidth={iniWidth} setiniWidth={setiniWidth} />

    <Programs/>

    <Whyus  iniWidth={iniWidth} setiniWidth={setiniWidth} />

    <Journey/>
    <Footer/>
  </div>
  )
}

 
