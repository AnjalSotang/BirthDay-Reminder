import React from 'react'
import Navbar from './Navbar'

export const Home = () => {
    const style = {
        backgroundColor:'red', 
        display: 'block'
    }
  return (
    <>
    <Navbar/>s
    <div style= {style}> Hello! Every one or home page </div>
    </>
  )
}

export default Home
