import React from 'react'
import Nanohead from '../../utilities/Nanohead'
import Pera from '../../utilities/Pera'
import './Videocard.css'

const Videocard = ({video,title , titlestyle , channle , channlestyle ,view,viewstyle, date , datestyle}) => {
  return (
    <div className='video-cart-box'>
        <div className='viveo-box'>
            <iframe src={video} frameborder="0"></iframe>
        </div>
        <div className='video-details-box'>
            <Nanohead text={title} style={titlestyle}/>
            <Pera text={channle} style={channlestyle}/>
            <div className='view-date-box'>
                <Pera text={view} style={viewstyle}/>
                <li className={datestyle}>{date}</li>
            </div>
        </div>
    </div>
  )
}

export default Videocard