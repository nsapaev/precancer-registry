import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    login:"",
    password:"",
}

const loginReducer = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLoginAC: (state,{payload})=>{
                state.login = payload.login
                state.password = payload.password
        }
    }
})

export default loginReducer.reducer
export const {setLoginAC} = loginReducer.actions