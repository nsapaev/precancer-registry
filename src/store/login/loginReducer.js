import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    login:"",
    password:""
}

const loginReducer = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLoginAC: (state,action)=>{
                state.login = action.payload.login
                state.password = action.payload.password
        }
    }
})

export default loginReducer.reducer
export const {setLoginAC} = loginReducer.actions