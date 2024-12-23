import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../redux/user";

export const store = configureStore({
    reducer: {
        userSlice: userReducer,
    },
})

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>
export type Appdispatch = AppStore["dispatch"];
