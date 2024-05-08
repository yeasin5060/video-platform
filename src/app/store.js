import { configureStore } from '@reduxjs/toolkit'
import videoslice from '../creatslice/videoslice'

export const store = configureStore({
  reducer: {
    video : videoslice
  },
})