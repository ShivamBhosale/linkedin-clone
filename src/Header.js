import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Header() {
  return (
    <div className='header'>
      
    <div className='header__left'>
        <img src='https://img.icons8.com/fluency/48/linkedin.png' alt='' />
        <div className='header__search'>
            <SearchIcon/>
            <input type='text' placeholder='Search' />
        </div>
    </div>

    <div className='header__right'>
    <HeaderOption Icon={HomeIcon} title="Home"/>
    <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
    <HeaderOption Icon={WorkIcon} title="Jobs"/>
    <HeaderOption Icon={ChatIcon} title="Messaging"/>
    <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
    <HeaderOption avatar='https://avatars.githubusercontent.com/u/50315818?v=4' title='Me'/>

    </div>

    </div>
  )
}

export default Header
