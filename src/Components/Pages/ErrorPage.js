import React from 'react'
import Header from './Header'

function ErrorPage() {
    return (
        <>
            
            <div className='ErrorComponent'>
                {/* <h1> <span style={{color:'red'}}>404</span> Page Not Found</h1> */}
                <img src={'./error.jpg'} />
            </div>
        </>
    )
}

export default ErrorPage