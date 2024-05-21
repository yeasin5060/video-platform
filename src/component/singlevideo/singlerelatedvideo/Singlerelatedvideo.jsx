import React, { useEffect } from 'react'
import './Singlerelatedvideo.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideo } from '../../../creatslice/relatedvideosslice';
import Subrelatedvideobox from '../../../subcomponent/subrelatedvideobox/Subrelatedvideobox';

const Singlerelatedvideo = ({tages , id }) => {
  const {videodata} = useSelector( state => state.relatedvideo)
    const dispetch = useDispatch()
    useEffect(()=>{
       dispetch(fetchRelatedVideo({tages , id}))
    },[dispetch,tages,id])
  return (
    <div className='singlerelated-video-contant-box'>
        { videodata.length > 0 &&
            videodata.map((items)=>(
              <Subrelatedvideobox key={items.id} relatedvideolink={`/${items.id}`} videolink={items.link} title={items.title} chanle={items.chanle} view={items.view} date={items.date}/>
           ))
        }
    </div>
  )
}

export default Singlerelatedvideo