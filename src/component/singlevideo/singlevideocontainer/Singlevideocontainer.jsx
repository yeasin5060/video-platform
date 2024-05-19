import React, { useEffect } from 'react'
import Singlevideobox from '../singlevideobox/Singlevideobox'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleVideo } from '../../../creatslice/singlevideoslice'
import { useParams } from 'react-router-dom'
const Singlevideocontainer = () => {
    const {loding , isError , error, data} = useSelector(state => state.singlevideo)
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchSingleVideo(id))
    },[dispatch , id])

    let singleVideo;
    if(loding){
        singleVideo = "loding"
    }
    if(isError){
        singleVideo = `error ${error}`
    }
    if(!loding && !isError && data){
        singleVideo = <Singlevideobox singlevideo = {data} key={data.id}/>
    }
  return (
   <section id='singlevideo-container'> 
        <div className='container'>
            <div className='singlevdio-container-contant-flex'>
                {
                    singleVideo
                }
            </div>
        </div>
   </section>
  )
}

export default Singlevideocontainer