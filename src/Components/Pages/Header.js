import React, { useState } from 'react'
import '../Css/main.css'
import { Link, NavLink } from 'react-router-dom'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Header() {
  const [showicon, setshowicon] = useState(false)
  return (

    <>
      <div className='header'>
        <div className='logo'><Link to="/"><img src={"/preview2.png"} /></Link>
          <h1>CRUD APP</h1>
        </div>

        <div className={showicon? "navbarT" : "navbar show-cross"}>
          <ul className='navbar-list'>

            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/add'>Student Form</NavLink></li>
            <li><NavLink to='/list'>Student List</NavLink></li>

          </ul>
        </div>

        <div className="hamburger-menu">
          <a  onClick={() => { setshowicon(!showicon) }}><FontAwesomeIcon icon={faBars} /></a> 
        </div>


      </div>


    </>


  )
}

export default Header