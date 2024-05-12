import React from 'react'
import Videocard from '../../component/videocard/Videocard'
import './Sublofivideo.css'

const Sublofivedio = ({alldata}) => {
  return (
    <Videocard key={alldata.id} video={alldata.link} title={alldata.title} titlestyle="lofivideo-title-style" channle={alldata.chanle} channlestyle="lofivideo-channle-style" view={alldata.view} viewstyle="lofivideo-view-style" date={alldata.date} datestyle="lofivideo-date-style"/>
  )
}

export default Sublofivedio