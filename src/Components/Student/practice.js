import axios from 'axios'
import React, { useState } from 'react'

function practice() {

    const [data, setdata] = useState({
        studentName: "",
        studentEmail: ""
    })


    function onChangeText(e) {
        setdata({ ...data, [e.target.name]: e.target.value })

    }

    //try and catch missing
    const formSubmit = async (e) => {
        e.preventDefault()
        const addDetails = await axios.post("https://captain-json-server.onrender.com/studentdetails", data)
    }


    return (
        <>
            <form>
                <input type='text' placeholder='Enter your name' name="studentName" onChange={(e) => onChangeText(e)}></input>
                <input type='text' placeholder='Enter your email' name="studentEmail" onChange={(e) => onChangeText(e)}></input>
                <button onClick={formSubmit}>add</button>
            </form>
        </>
    )
}

export default practice