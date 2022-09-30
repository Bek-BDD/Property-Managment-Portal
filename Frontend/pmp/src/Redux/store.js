import { configureStore } from '@reduxjs/toolkit'
import properyReducer from './createPropertySlice'
import loggedUserSlice from './loggedUserSlice'
import propertyAddressSlice from './propertyAddressSlice'
import propertyImages from './propertyImageSlice'

export const store = configureStore({
  reducer: {
    propertyInformation: properyReducer,
    addressInformation: propertyAddressSlice,
    propertyImage:propertyImages,
    loggedUser:loggedUserSlice
  },
})