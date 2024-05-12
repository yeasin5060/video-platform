import { configureStore } from '@reduxjs/toolkit'
import videoslice from '../creatslice/videoslice'
import gamingslice from '../creatslice/gamingslice'
import musicslice from '../creatslice/musicslice'
import lofislice from '../creatslice/lofislice'


export const store = configureStore({
  reducer: {
    video : videoslice,
    gamingvideo : gamingslice,
    musicvideo : musicslice,
    lofivideo : lofislice
  },
})