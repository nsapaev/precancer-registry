import { createSlice } from '@reduxjs/toolkit';

let auth = JSON.parse( sessionStorage.getItem("auth"))




if(auth){

}

const initialState = {
    login: auth ? auth.login: "",
    password: auth ? auth.password: "",
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