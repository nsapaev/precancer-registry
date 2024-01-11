import { configureStore } from "@reduxjs/toolkit";
import settingReducer from "./setting/reducers";
import loginReducer from "./login/loginReducer";

export const store = configureStore({
  reducer: {
    setting: settingReducer,
    login:loginReducer,
  },
});

window.state = store