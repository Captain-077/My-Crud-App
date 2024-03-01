import axios from 'axios'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function View() {
    const [data, setdata] = useState({})
    const { id } = useParams();


    const getViewData = async () => {

        try {
            const getdata = await axios.get(`https://captain-json-server.onrender.com/studentdetails/${id}`)
            setdata(getdata.data)
           
        }

        catch (error) {
            console.log(error)
        }

    }
    useEffect (() => {
        getViewData()

    },[])
    





    return (

        <div>
            <table className='content-table' >
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Student Name</th>
                    <th>Student Email</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{data.id}</td>
                    <td>{data.studentName}</td>
                    <td>{data.studentEmail}</td>
                </tr>
                </tbody>
            </table>

        </div>
    )
}

export default View