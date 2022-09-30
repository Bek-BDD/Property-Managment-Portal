import { createSlice } from '@reduxjs/toolkit'


export const loggedUserSlice = createSlice({
  
  name: 'loggedUser',
  initialState:{
    loggedIn:false
  },
  reducers: {
    setLoggedIn: (state,action) => {
      state.loggedIn = action.payload
      
    },
  },
})


// Action creators are generated for each case reducer function
export const {setLoggedIn } = loggedUserSlice.actions

export default loggedUserSlice.reducer