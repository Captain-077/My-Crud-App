import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../Css/main.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'


function ListDetails() {
  const [data, setData] = useState([])

  async function getAPIdata() {


    try {
      const getData = await axios.get(`http://localhost:3333/studentdetails`)
      console.log(getData)
      setData(getData.data)
    }

    catch (error) {
      console.log(error)
    }


  }


  useEffect(() => {
    getAPIdata()
  }, [])


  const handleDelete = async (getID) => {
    
    const getResult = await axios.delete(`http://localhost:3333/studentdetails/${getID}`)
    console.log(getResult);
    console.log(getID);
    getAPIdata()
  }

  return (
    <>
  
    <div>
      <table className='content-table' >
        <thead>

          <tr style={{}}>
            <th>S.No</th>
            <th>Student Name</th>
            <th>Student Email</th>
            <th colSpan={3}>Action</th>
          </tr>

        </thead>
        <tbody>
          {

            data.map((itemData, itemIndex) => {
              return <>
                <tr key={itemIndex}>
                  <td>{itemData.id}</td>
                  <td>{itemData.studentName}</td>
                  <td>{itemData.studentEmail}</td>
                  <td><Link to={`/view/${itemData.id}`}><FontAwesomeIcon icon={faEye} style={{color:'black'}}/></Link></td>
                  <td><Link to={`/edit/${itemData.id}`}><FontAwesomeIcon icon={faPenToSquare}  style={{color:'black'}}/></Link></td>
                  <td><FontAwesomeIcon onClick={(e) => handleDelete(itemData.id)} icon={faTrash} /></td>

                </tr>
              </>



            })

          }
        </tbody>

      </table>








    </div>
    </>
  )
}

export default ListDetails