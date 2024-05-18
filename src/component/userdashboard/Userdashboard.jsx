import React from 'react'
import Nanohead from '../../utilities/Nanohead'
import Pera from '../../utilities/Pera'
import profile from '../../images/profile.jpg'
import './Userdashboard.css'
const Userdashboard = ({userdashboard}) => {
  return (
    <div className={userdashboard}>
        <div className='userdash-profile-box-flex'>
            <div className='userdash-profile-box'>
                <img src={profile}  alt='not found'/>
            </div>
            <div className='userdash-name-box'>
                <Nanohead text='yeasun munshi' style='userdash-name-head'/>
                <Pera text="yeasin.munshi@gmail.com" style="userdash-email"/>
            </div>
        </div>
        <div className='userdash-all-link-box'>

        </div>
    </div>
  )
}

export default Userdashboard