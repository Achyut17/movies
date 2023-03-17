import React from 'react'
import { Link } from 'react-router-dom'
import "./PageNotFound.css"

const pageNotFound = () => {
  return (
    <div className="toast">
      <div className="heading">
        <h2>That Page doesn't exist!</h2>
        <p>Sorry the page you are looking for could not be found</p>
      </div>
      <div className="contact">
        <p>You can return to the 
            <Link to="/" style={{color:'red',marginLeft:'5px',marginRight:'5px'}}>
              home page
            </Link>
          if you can't find what you are looking for
        </p>
      </div>
    </div>
  )
}

export default pageNotFound