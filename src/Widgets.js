import React from 'react'
import './Widget.css'
import InfoIcon from '@mui/icons-material/Info';

const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
        <div className='widgets__articleLeft'>
            
        
        </div>
        <div className='widgets__articleRight'>
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
);

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>Linkedin News</h2>
            <InfoIcon />

        </div>
        <h4>Top Stories</h4>
        {newsArticle('Layoffs happening all over..', '8h ago - 17,521 readers')}
        {newsArticle('AI startup secures $200M in Series B funding', '2h ago - 12,034 readers')}
        {newsArticle('Tech giant announces major shift to remote work', '5h ago - 8,569 readers')}
        {newsArticle('New cybersecurity flaw discovered in popular app', '10h ago - 7,822 readers')}
        {newsArticle('Electric vehicle market sees unprecedented growth', '3h ago - 15,476 readers')}
        {newsArticle('Breakthrough in quantum computing announced', '1h ago - 10,643 readers')}
        {newsArticle('Social media platform faces backlash over data breach', '6h ago - 9,287 readers')}
        {newsArticle('Tech firm to lay off 10% of its workforce', '4h ago - 18,203 readers')}
        {newsArticle('New smartphone model breaks pre-order records', '9h ago - 14,502 readers')}
        {newsArticle('Major software update released with new features', '7h ago - 11,390 readers')}
        {newsArticle('Biotech company reports successful clinical trial', '11h ago - 6,217 readers')}

    </div>

  )
}

export default Widgets
