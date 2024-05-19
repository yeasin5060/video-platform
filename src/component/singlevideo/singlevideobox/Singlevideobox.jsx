import React from 'react'
import Minihead from '../../../utilities/Minihead'
import Pera from '../../../utilities/Pera'
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import './Singlevideobox.css'

const Singlevideobox = ({singlevideo}) => {
    console.log(singlevideo);
  return (
    <div className='single-video-contant-box'>
        <div className='single-video-box'>
            <iframe src={singlevideo.link}  frameborder="0"></iframe>
        </div>
        <div className='single-video-details-box'>
            <Minihead text={singlevideo.title} style='single-video-details-tittle'/>
            <Pera text={singlevideo.chanle} style='single-video-channle'/>
            <div className='single-vide-liker_box'>
                <div className='single-video-like_box'>
                    <AiOutlineLike />
                </div>
                <div className='single-video-like_box'>
                    <AiOutlineDislike />
                </div>
            </div>
            <Pera text='' style='single-video-details-description'/>
        </div>
    </div>
  )
}

export default Singlevideobox