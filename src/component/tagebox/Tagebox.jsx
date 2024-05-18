import React from 'react'
import { Link } from 'react-router-dom'
import './Tagebox.css'

const Tagebox = ({alltage}) => {
    console.log(alltage);
  return (
    <div className='tage-box'>
        <li>
            <Link to= ''>{alltage.title}</Link>
        </li>
    </div>
  )
}

export default Tagebox