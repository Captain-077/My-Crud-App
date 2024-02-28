import React from 'react'
import Header from './Header'
import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer'

function Home() {
  return (
    <>
      <div className='Main-banner'>
      <div className='banner-content'>
        <h1>  WELCOME TO <span>CRUD </span> APP </h1>
        <p>Streamline academic processes with our Student Management App for schools and colleges. Effortlessly manage attendance, grades, schedules, and communication, fostering an efficient and connected learning environment for all.</p>
        <button><Link to="/add">Get Started</Link></button>
      </div>
      <div className="banner-image"></div>
     </div>
    </>
  )
}

export default Home