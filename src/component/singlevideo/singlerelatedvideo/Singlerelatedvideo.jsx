import React, { useEffect } from 'react'
import './Singlerelatedvideo.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideo } from '../../../creatslice/relatedvideosslice';
import Subrelatedvideobox from '../../../subcomponent/subrelatedvideobox/Subrelatedvideobox';


const Singlerelatedvideo = ({tage , id }) => {
  const {videodata} = useSelector( state => state.relatedvideo)
  const dispetch = useDispatch()
    useEffect(()=>{
      dispetch(fetchRelatedVideo({tage , id}))
    },[dispetch,tage,id])
  console.log(tage , id);
  console.log(videodata[0].id);
  return (
    <div className='singlerelated-video-contant-box'>
        { videodata.length > 0 &&
            videodata.map((items , index)=>(
              <Subrelatedvideobox key={index} relatedvideolink={items.id} videolink={items.link} title={items.title} chanle={items.chanle} view={items.view} date={items.date}/>
           ))
        }
    </div>
  )
}

export default Singlerelatedvideo