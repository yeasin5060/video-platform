import React, { useEffect, useState } from 'react'
import './Musicvideo.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMusicVideo } from '../../../creatslice/musicslice'
import Suballmusicvideo from '../../../subcomponent/suballmusicvideo/Suballmusicvideo'

const Musicvideo = () => {
    let {loding , isError , error , msdata} = useSelector(state => state.musicvideo)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchMusicVideo())
    },[dispatch])

    let musicAllVideo ;
    if(loding){
        musicAllVideo = "loding ...."
    }
    if(isError){
        musicAllVideo = `error ${error}`
    }
    if(!loding && !isError && msdata.length > 0){
        musicAllVideo = msdata.map((item)=> <Suballmusicvideo alldata={item} key={item.id}/>)
    }
  return (
    <section id='music-video'>
      <div className='container'>
          <div className='music-video-flex'>
            {
                musicAllVideo
            }
          </div>
      </div>
  </section>
  )
}

export default Musicvideo