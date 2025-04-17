import { configureStore } from '@reduxjs/toolkit'
import middlewareSlice from './middlewareSlice'

export const store = configureStore({
  reducer: {
    api : middlewareSlice
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch