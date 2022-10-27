import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons';
import SubMenu from './SubMenu';
import GetSideBatData from "./SidebarData";


function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [subnav, setSubnav] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const showSubnav = () => setSubnav(!subnav);
  const sidebarData = GetSideBatData();

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose onClick={showSidebar}/>
              </Link>
            </li>
            {sidebarData.map((item, index) => {

              return <SubMenu  item={item} />;
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;