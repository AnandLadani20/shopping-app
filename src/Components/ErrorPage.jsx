import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
        <div className='container'>
             <div className=''>
                <h1>404 Error Page</h1>
                <p>Oops; Sorry,but the page you were trying to view does not exist</p>
                <NavLink to='/'>Go Back</NavLink>
             </div>
        </div>
    </div>
  )
}

export default ErrorPage