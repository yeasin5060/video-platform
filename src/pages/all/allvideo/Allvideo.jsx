import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllVideo } from '../../../creatslice/videoslice';
import './Allvideo.css';
import Videocard from '../../../component/videocard/Videocard';

const Allvideo = () => {
    const [ allData , setAllData] = useState([])
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
      allvideo = data
    }
    setAllData(allvideo)
  return (
    <section id='all-video'>
    <div className='container'>
        <div className='all-video-flex'>
          
        </div>
    </div>
  </section>
  )
}

export default Allvideo