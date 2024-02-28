import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'


function AddNew() {
  const Navigate = useNavigate();
  const [data, setdata] = useState({
    studentName: "",
    studentEmail: ""
  })

  function onChangeText(e) {
    setdata({ ...data, [e.target.name]: e.target.value })

  }


  const formSubmit = async (e) => {
    e.preventDefault()
    try {
      const getPost = await axios.post("http://localhost:3333/studentdetails", data)
      console.log(getPost.data)
      console.log(data)
    }
    catch (error) {
      console.log(error)
    }


  }
  // a function
  const handleClick = () => {
    Navigate('/list')
  }

  return (
    <>
    
      <div className='AddForm'>
        <h3 className='title'>Add New Student</h3>
        <form>

          <input type="text" placeholder='Enter Your Name' name="studentName" onChange={(e) => onChangeText(e)}></input>
          <input type="email" placeholder='Enter Your Email' name="studentEmail" onChange={(e) => onChangeText(e)}></input>
          <button onClick={formSubmit}>Add</button>

        </form>
      </div>
      <button className="backToStudent" onClick={handleClick}>Go to student list</button>
    </>
  )
}

export default AddNew