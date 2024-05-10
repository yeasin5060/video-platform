import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGamingVideo } from '../../../creatslice/gamingslice'
import './Gamingvideo.css'
import Subgamingvideo from '../../../subcomponent/subgamingvideo/Subgamingvideo'

const Gamingvideo = () => {
  let { loding , isError , error , gmvideo} = useSelector(state => state.gamingvideo);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchGamingVideo())
  },[dispatch])

  let allvideo;

  if(loding){
    allvideo = "loding...."
  }
   if(isError){
    allvideo = `error ${error}`
  }
  if(!loding && !isError && gmvideo.length > 0){
    allvideo = gmvideo.map((item)=> <Subgamingvideo alldata = {item} key={item.id} />)
  }
  return (
    <section id='gaming-video'>
      <div className='container'>
          <div className='gaming-video-flex'>
            {
              allvideo
            }
          </div>
      </div>
  </section>
  )
}

export default Gamingvideo