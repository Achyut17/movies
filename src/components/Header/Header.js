import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <Link to="/" >
        <div className="logo">Movies APP</div>
      </Link>
        <div className="user-image">
          <img src="https://picsum.photos/270?random=1" alt="user" />
        </div>
    </div>
  )
}

export default Header