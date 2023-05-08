import React, { useState, useContext, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons';
import SubMenu from './SubMenu';
import GetSideBarData from "./SidebarData";
import AuthContext from '../context/AuthContext'
import { Button } from 'antd';
import axios from 'axios';
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

const defaultSideBar = () => {
  const sidebar = [{
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Tkinter Generator',
    path: '/tk',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Multiple File',
    path: '/test',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'View All Content',
    path: '/content',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  }]
  return sidebar
};


function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [subnav, setSubnav] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const showSubnav = () => setSubnav(!subnav);
  const [sidebarData, setSidebarData] = useState(defaultSideBar())
  let { user, logoutUser } = useContext(AuthContext)

  // use effect and fetch topic here and set it right here

  useEffect(() => {
    // console.log("test print: ", topicObject.title)
    // const sidebar = GetSideBarData()  
    const fetchData = async () => {
      const topics = await axios.get("https://cyiwei.online/topics/");
      console.log("topics", topics.data)
      const sidebarArrObj = defaultSideBar();
      const Topic = {
        title: 'Topics',
        path: '#',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: []
      }
      // console.log("test print: ", topicObject.title)
      Object.entries(topics.data).map(([key, value]) => {
        var topicObject = {};
        topicObject.title = value.name;
        topicObject.path = '/topic/' + value.id;
        topicObject.icon = <IoIcons.IoIosPaper />
        topicObject.cName = 'nav-text'
        Topic.subNav.push(topicObject);
      })

      sidebarArrObj.push(Topic)

      if (user) {
        const staffIdentity = await axios.get(`https://cyiwei.online/users/${user.user_id}/`);
        if (staffIdentity.data.is_staff) {
          const adminNav = {
            title: 'Admin Portal',
            path: '/admin',
            icon: <IoIcons.IoIosPaper />,
            cName: 'nav-text'
          }
          sidebarArrObj.push(adminNav);
          setSidebarData(sidebarArrObj);
        }
      }
    else {
      setSidebarData(sidebarArrObj);
    }
    }
    fetchData().catch(console.error)
  }, [user]);





  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div style={{ margin: "10px" }}>
            {user ? <Button onClick={logoutUser}>Logout</Button> : <Link to="/login">Login</Link>}
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </Link>
            </li>
            {sidebarData && sidebarData.map((item, index) => {

              return <SubMenu item={item} />;
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;