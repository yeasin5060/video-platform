import React from 'react'
import Videocard from '../../component/videocard/Videocard'
import './Suballvideo.css'

const Suballvideo = ({alldata}) => {
  return (
    <Videocard key={alldata.id} video={alldata.link} title={alldata.title} titlestyle="video-title-style" channle={alldata.chanle} channlestyle="video-channle-style" view={alldata.view} viewstyle="video-view-style" date={alldata.date} datestyle="video-date-style"/>
  )
}

export default Suballvideo