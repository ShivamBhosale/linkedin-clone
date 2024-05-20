import React from 'react'
import './HeaderOptions.css'

function HeaderOption({avatar, Icon, title}) {
  return (
    <div className="headerOption">
        {Icon && <Icon className='headerOption__icon'/>}
        {avatar && <img src={avatar} className='headerOption__icon' alt=''/>}
        <h3 className='headerOption__title'>{title}</h3>
      
    </div>
  )
}

export default HeaderOption
