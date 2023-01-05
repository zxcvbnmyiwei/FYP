import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import "./Header.css"

const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)
  return (
    <div className="HeaderContainer">
        {user && <p>Hello {user.username}!</p>}
    </div>
  )
}

export default Header