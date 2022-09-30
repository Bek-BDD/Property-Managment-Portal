import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    data: []
}

export const propertyAddressSlice = createSlice({

    name: 'address',
    initialState,
    reducers: {
        addressInformation: (state, action) => {
            state.data = action.payload
        },
    },
})


// Action creators are generated for each case reducer function
export const {addressInformation} = propertyAddressSlice.actions

export default propertyAddressSlice.reducer