import { configureStore } from '@reduxjs/toolkit'
import videoslice from '../creatslice/videoslice'
import tageslice from '../creatslice/tageslice'
import singlevideoslice from '../creatslice/singlevideoslice'

export const store = configureStore({
  reducer: {
    video : videoslice,
    tage : tageslice,
    singlevideo : singlevideoslice
  },
})