import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { addTage, removeTage } from '../../creatslice/filterslice'
import { useDispatch, useSelector } from 'react-redux'
import './Tagebox.css'
const Tagebox = ({alltage}) => {
  const {tage} = useSelector(state => state.search)
  const selectedTag = tage.includes(alltage)
  const dispatch = useDispatch()
  let handletag = ()=>{
     if(selectedTag){
      dispatch(removeTage(alltage))
     }else{
      dispatch(addTage(alltage))
     }
  }
  return (
    <div className="tage-box">
        <li  onClick={handletag}>
          <Link className="" to= {alltage.id}  >{alltage.title}</Link>
        </li>
    </div>
  )
}

export default Tagebox