import { configureStore } from '@reduxjs/toolkit'
import videoslice from '../creatslice/videoslice'
import gamingslice from '../creatslice/gamingslice'

export const store = configureStore({
  reducer: {
    video : videoslice,
    gamingvideo : gamingslice
  },
})