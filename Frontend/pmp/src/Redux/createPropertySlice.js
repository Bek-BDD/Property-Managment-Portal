import { createSlice } from '@reduxjs/toolkit'


export const createPropertySlice = createSlice({
  
  name: 'property',
  initialState: { data : []},
  reducers: {
    propertyInformation: (state, action) => {
      state.data = action.payload
      
    },
  },
})


// Action creators are generated for each case reducer function
export const {propertyInformation } = createPropertySlice.actions

export default createPropertySlice.reducer