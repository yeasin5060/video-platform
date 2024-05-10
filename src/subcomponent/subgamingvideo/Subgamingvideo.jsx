import React from 'react'
import Videocard from '../../component/videocard/Videocard'
import './Subgamingvideo.css'

const Subgamingvideo = ({alldata}) => {
  console.log(alldata);
  return (
    <Videocard key={alldata.id} video={alldata.link} title={alldata.title} titlestyle="gaming-title-style" channle={alldata.chanle} channlestyle="gaming-channle-style" view={alldata.view} viewstyle="gaming-view-style" date={alldata.date} datestyle="gaming-date-style"/>
  )
}

export default Subgamingvideo