import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import "./Header.css"

const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)
    console.log(user)
  return (
    <div className="HeaderContainer">
        {user && <p className='hellotext'>Hello {user.username}!</p>}
    </div>
  )
}

export default Header