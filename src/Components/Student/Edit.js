import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'

function Edit() {
    const Navigate = useNavigate()

    const { id } = useParams();
    console.log(id);

    const [edit, setEdit] = useState({
        studentName: "",
        studentEmail: ""
    })


    useEffect(() => {

        try {
            const fetchSelectedAPI = async () => {
                const getPostResult = await axios.get(`http://localhost:3333/studentdetails/${id}`)
                setEdit(getPostResult.data)
            }
            fetchSelectedAPI()
        }
        catch (error) {
            console.log(error)
        }

    }, [id])



    const changeText = (e) => {

        setEdit({ ...edit, [e.target.name]: e.target.value })

    }



    const updateFnc = async (e) => {

        try {
            e.preventDefault()
            const updatePostResult = await axios.put(`http://localhost:3333/studentdetails/${id}`, edit)
        }
        catch (error) {
            console.log(error)
        }
        Navigate("/list")

    }



    const handleClick = () => {
        Navigate("/list")
    }




    return (
        <>
            <div className='AddForm'>
                <h3 className='title'>Update Student Details</h3>
                <form>
                    <input type="text" name="studentName" onChange={changeText} value={edit.studentName}></input>
                    <input type="text" name="studentEmail" onChange={changeText} value={edit.studentEmail}></input>
                    <button onClick={updateFnc}>Update</button>
                </form>

            </div>

            <button className="backToStudent" onClick={handleClick}>Go to student list</button>
        </>
    )
}

export default Edit