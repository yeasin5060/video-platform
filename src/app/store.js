import { configureStore } from '@reduxjs/toolkit'
import videoslice from '../creatslice/videoslice'
import tageslice from '../creatslice/tageslice'

export const store = configureStore({
  reducer: {
    video : videoslice,
    tage : tageslice,
  },
})