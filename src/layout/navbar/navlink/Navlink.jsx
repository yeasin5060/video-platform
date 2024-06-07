import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { fetchTage } from '../../../creatslice/tageslice';
import Tagebox from '../../../component/tagebox/Tagebox';

const Navlink = () => {
    const dispatch = useDispatch()
    let {loding , isError , error , data} = useSelector(state => state.tage)
    useEffect(()=>{
        dispatch(fetchTage())
    },[dispatch])

    let tages;
    if(loding){
        tages = "loding..."
    }
    if(isError){
        tages = `error ${error}`
    }
    if(!loding && !isError && data.length > 0){
        tages = data.map((item) => <Tagebox alltage={item} key={item.id}/>)
    }
  return (
    <div className='container'>
        <nav className='nav-box'>
            <ul className='nav-route'>
                <li>
                    <NavLink to="home">all</NavLink>
                </li>
                {
                    tages
                }
            </ul>
        </nav>
    </div>
  )
}

export default Navlink