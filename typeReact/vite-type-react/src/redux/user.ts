import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    name: string;
    age: number;
    email: string;
}

const initialState: UserState = {
    name: "",
    age: 0,
    email: "",
};
export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        login: (state:any, action:PayloadAction<UserState>):any => {
            console.log({
                state,action
            });

            state.name = action.payload.name;
            state.age = action.payload.age;
            state.email = action.payload.email;
        }
    }
})

export const {login} = userSlice.actions;
export default userSlice.reducer;
