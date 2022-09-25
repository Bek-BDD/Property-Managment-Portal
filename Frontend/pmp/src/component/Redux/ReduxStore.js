import { configureStore } from "@reduxjs/toolkit"
import UserSlice from "./UserSlice"
const  reduxStore = configureStore({
    reducer : {
        user : UserSlice.reducer,
    }
})
export default reduxStore;