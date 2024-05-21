import React from 'react'
import Minihead from '../../utilities/Minihead'
import Pera from '../../utilities/Pera'
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import './Subbigrelatedvideobax.css'

const Subbigrelatedvideobax = ({relatedvideo}) => {
    console.log(relatedvideo);
  return (
    <div className='subbigrelatedvideobox-video-contant-box'>
        <div className='subbigrelatedvideobox-video-box'>
            <iframe src={relatedvideo.link}  frameborder="0"></iframe>
        </div>
        <div className='subbigrelatedvideobox-video-details-box'>
            <Minihead text='' style='subbigrelatedvideobox-video-details-tittle'/>
            <Pera text='' style='subbigrelatedvideobox-video-channle'/>
            <div className='subbigrelatedvideobox-vide-liker_box'>
                <div className='subbigrelatedvideobox-video-like_box'>
                    <AiOutlineLike />
                </div>
                <div className='subbigrelatedvideobox-video-like_box'>
                    <AiOutlineDislike />
                </div>
            </div>
            <Pera text='' style='subbigrelatedvideobox-video-details-description'/>
        </div>
    </div>
  )
}

export default Subbigrelatedvideobax