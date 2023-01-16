import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import iconImage from 'C:/Users/prash/OneDrive/Desktop/linkedin-clone/src/linkedin.png';
import HeaderOption from './HeaderOption';
import "C:/Users/prash/OneDrive/Desktop/linkedin-clone/src/Header.css";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';



function Header() {
  return (
    <div className='header'>

        <div className="header__left">
          <img src={iconImage} alt="icon" />

                <div className="header__search">
                    <SearchIcon /> 
                    <input type="text"/>

                </div>


        </div>

            <div className="header__right">
              <HeaderOption Icon={HomeIcon} title='Home'/>
              <HeaderOption Icon={SupervisorAccountIcon}title='My Network'/>
              <HeaderOption Icon={BusinessCenterIcon}title='Jobs'/>
              <HeaderOption Icon={ChatIcon}title='Messaging'/>
              <HeaderOption Icon={NotificationsIcon}title='Notifications'/>
              <HeaderOption avatar="src/logo512.png" alt="Me"/>

          </div>
        </div>
  )
}

export default Header
