import React from 'react'
import { Link } from 'react-router-dom'
import Minihead from '../../utilities/Minihead'
import Pera from '../../utilities/Pera'
import './Subrelatedvideobox.css'
const Subrelatedvideobox = ({relatedvideolink, videolink , title , chanle , view , date}) => {
  return (
    <div className='subrelatedvideobox-video-contant'>
        <Link ot = {relatedvideolink}>
            <div className='subrelatedvideobox-video-box'>
                <iframe src={videolink}  frameborder="0"></iframe>
            </div>
            <div className='subrelatedvideobox-video-details-box'>
                <Minihead text={title} style='subrelatedvideobox-video-details-tittle'/>
                <Pera text={chanle} style='subrelatedvideobox-video-channle'/>
                <div className='subrelatedvideobox-video-date-views-box'>
                    <Pera text= {view} style="subrelatedvideobox-video-views"/>
                    <Pera text={date} style="subrelatedvideobox-video-date"/>
                </div>
            </div>
        </Link>   
    </div>
  )
}

export default Subrelatedvideobox