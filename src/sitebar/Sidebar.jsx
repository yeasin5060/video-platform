import React from 'react'
import Sidebarhome from './sidebarhomesection/Sidebarhome'
import Sidebarhistory from './sidebarhistorysection/Sidebarhistory'
import Sidebarsubcrip from './sidebarsubscripsection/Sidebarsubcrip'
import './Sidebar.css'


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Sidebarhome/>
        <Sidebarhistory/>
        <Sidebarsubcrip/>
    </div>
  )
}

export default Sidebar
