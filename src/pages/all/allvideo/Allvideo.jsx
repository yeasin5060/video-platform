import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllVideo } from '../../../creatslice/videoslice';
import './Allvideo.css';
import Videocard from '../../../component/videocard/Videocard';
import axios from 'axios';

const Allvideo = () => {
    let { loding , isError , error , data} = useSelector(state => state.video);
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(fetchAllVideo())
    },[dispatch])

    let allvideo 
    if(loding){
      allvideo = "loding...."
    }
     if(isError){
      allvideo = `error ${error}`
    }
    if(!loding && !isError && data.length > 0){
      allvideo = data.map((item)=> <Videocard alldata = {item} key={item.id} />)
    }
  return (
    <section id='all-video'>
    <div className='container'>
        <div className='all-video-flex'>
           {
            allvideo
           }
        </div>
    </div>
  </section>
  )
}

export default Allvideo