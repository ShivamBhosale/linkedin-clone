import React from 'react'
import './Post.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputOption from './InputOption';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';
function Post({name, description, message, photoUrl}) {
  return (
    <div className='post'>
        <div className="post__header">
            <AccountCircleIcon/>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        

        
        
        </div>
        <div className="post__body">
            <p>{message}</p>
        </div>

        <div className="post__buttons">
            <InputOption Icon={ThumbUpIcon} title='Like' color='gray'/>
            <InputOption Icon={ChatBubbleOutlineIcon} title='Comment' color='gray'/>
            <InputOption Icon={RepeatIcon} title='Repost' color='gray'/>
            <InputOption Icon={SendIcon} title='Send' color='gray'/>
        </div>

    </div>
  )
}

export default Post
