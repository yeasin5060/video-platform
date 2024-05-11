import { configureStore } from '@reduxjs/toolkit'
import videoslice from '../creatslice/videoslice'
import gamingslice from '../creatslice/gamingslice'
import musicslice from '../creatslice/musicslice'

export const store = configureStore({
  reducer: {
    video : videoslice,
    gamingvideo : gamingslice,
    musicvideo : musicslice
  },
})