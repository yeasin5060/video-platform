import React, { useEffect } from 'react'
import Singlevideobox from '../singlevideobox/Singlevideobox'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleVideo } from '../../../creatslice/singlevideoslice'
import { useParams } from 'react-router-dom'
import Singlerelatedvideo from '../singlerelatedvideo/Singlerelatedvideo'
import './Singlevideocontainer.css'
import Subbigrelatedvideobax from '../../../subcomponent/subbigretatedvideobox/Subbigrelatedvideobax'
const Singlevideocontainer = () => {
    const {loding , isError , error, data} = useSelector(state => state.singlevideo)
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchSingleVideo(id))
    },[dispatch , id])

    let singleVideo;
    //let relatedVideo;
    if(loding){
        singleVideo = "loding"
    }
    if(isError){
        singleVideo = `error ${error}`
    }
    if(!loding && !isError && data){
        singleVideo = <Singlevideobox singlevideo = {data} key={data.id} />
        //relatedVideo = <Subbigrelatedvideobax relatedvideo = {data} key={data.id}/>
    }
  return (
   <section id='singlevideo-container'> 
        <div className='container'>
            <div className='singlevdio-container-contant-flex'>
                <div>
                    {   
                        singleVideo
                    }
                </div>
                <div>
                    <Singlerelatedvideo tages = {data.tage} id={data.id} />
                </div>
            </div>
        </div>
   </section>
  )
}

export default Singlevideocontainer