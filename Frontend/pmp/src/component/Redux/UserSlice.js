import {createSlice} from '@reduxjs/toolkit';

const UserSlice = createSlice({
    name: 'loginSlice',

    initialState: {

        user: "Hello"
    },
    reducers: {

        login: (state, action) => {
            state.user = action.payload
        },
    }
})
export const userActions = UserSlice.actions;
export default UserSlice;