import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchlofiVideo } from '../../../creatslice/lofislice'
import Sublofivedio from '../../../subcomponent/sublofivideo/Sublofivedio'
import './Lofivideo.css'

const Lofivideo = () => {
    const {loding , isError , error ,lofidata} = useSelector(state => state.lofivideo)
    const dicpatch = useDispatch()
    useEffect(()=>{
        dicpatch(fetchlofiVideo())
    },dicpatch)
    
    let alllofivedio;

    if(loding){
        alllofivedio = "loging ...."
    }
    if(isError){
        alllofivedio =`error ${error}`
    }
    if(!loding && !isError && lofidata.length > 0){
        alllofivedio = lofidata.map((item) => <Sublofivedio alldata={item} key={item.id}/>)
    }
    
  return (
    <section id='lofi-video'>
      <div className='container'>
          <div className='lofi-video-flex'>
                {
                    alllofivedio
                }
          </div>
      </div>
  </section>
  )
}

export default Lofivideo