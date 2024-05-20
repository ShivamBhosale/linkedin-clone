import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'

function Sidebar() {

    const RecentItem = (topic) => (
         <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAkBnAbYjhpOmO-yyUGRks56CeoZAnbFySaw&usqp=CAU" alt="" />
        <Avatar className='sidebar_avatar'/>
        <h2>Shivam Bhosale</h2>
        <h4>Give me a job</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar__stat">
            <p>Who Viewed You</p>
            <p className='sidebar_statNumber'>90,909</p>
        </div>
        <div className="sidebar__stat">
        <p>Views on post</p>
            <p className='sidebar_statNumber'>50,000</p>
        </div>
       
        <div className="sidebar__button">
          <div>Recent</div>  
          {RecentItem('Python')}
          {RecentItem('ReactJS')}
          {RecentItem('Javascript')}
          {RecentItem('NodeJS')}
          {RecentItem('MongoDB')}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
