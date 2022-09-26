import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: []
}

export const propertyImageSlice = createSlice({
  
  name: 'images',
  initialState,
  reducers: {
    addImage: (state, action) => {
      state.data = action.payload
    },
  },
})


// Action creators are generated for each case reducer function
export const {addImage } = propertyImageSlice.actions

export default propertyImageSlice.reducer