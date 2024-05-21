import { configureStore } from '@reduxjs/toolkit'
import videoslice from '../creatslice/videoslice'
import tageslice from '../creatslice/tageslice'
import singlevideoslice from '../creatslice/singlevideoslice'
import userdetails from '../creatslice/userdetails'
import relatedvideosslice from '../creatslice/relatedvideosslice'
import filterslice from '../creatslice/filterslice'

export const store = configureStore({
  reducer: {
    video : videoslice,
    tage : tageslice,
    singlevideo : singlevideoslice,
    userdata : userdetails,
    relatedvideo : relatedvideosslice,
    search : filterslice
  },
})