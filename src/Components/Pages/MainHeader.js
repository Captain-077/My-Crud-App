import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function MainHeader() {
  return (
    <>
      <Header />
      <Footer/>
      <Outlet/>
    </>
  )
}

export default MainHeader;