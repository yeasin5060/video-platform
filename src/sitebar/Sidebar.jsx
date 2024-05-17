import React from 'react'
import Sidebarhome from './sidebarhomesection/Sidebarhome'
import Sidebarhistory from './sidebarhistorysection/Sidebarhistory'
import Sidebarsubcrip from './sidebarsubscripsection/Sidebarsubcrip'
import Sidebarexploer from './sidebarexplore/Sidebarexploer'
import './Sidebar.css'
import Sidebarsetting from './sidebarsettingbox/Sidebarsetting'


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Sidebarhome/>
        <Sidebarhistory/>
        <Sidebarsubcrip/>
        <Sidebarexploer/>
        <Sidebarsetting/>
    </div>
  )
}

export default Sidebar
