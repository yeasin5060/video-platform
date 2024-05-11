import React from 'react'
import Videocard from '../../component/videocard/Videocard';

const Suballmusicvideo = ({alldata}) => {
    console.log(alldata);
  return (
    <Videocard key={alldata.id} video={alldata.link} title={alldata.title} titlestyle="allmusic-title-style" channle={alldata.chanle} channlestyle="allmusic-channle-style" view={alldata.view} viewstyle="allmusic-view-style" date={alldata.date} datestyle="allmusic-date-style"/>
  )
}

export default Suballmusicvideo