import React from 'react'
import { Link } from 'react-router-dom'
import imageone from '../../images/errorimage.jpeg'
import Pera from '../../utilities/Pera'
import './Errorpage.css'

const Errorpage = () => {
  return (
    <section id='errorpage'>
        <div className='container'>
            <div className='errorpage_contant_box'>
                <div className='errorpage_image_box'>
                    <img src={imageone} alt="not found" />
                </div>
                <div className='errorpage_btn_box'>
                    <Pera text="opp! The page you requested was not found!" style="errorpage_pera"/>
                    <div className='errorpage_link_box'>
                        <Link className='back_home_page_link' to="/">back to home</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Errorpage