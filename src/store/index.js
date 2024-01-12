import { configureStore } from "@reduxjs/toolkit";
import settingReducer from "./setting/reducers";
import loginReducer from "./login/loginReducer";
import patientListReducer from "./patientsList/patientListReducer";

export const store = configureStore({
  reducer: {
    setting: settingReducer,
    login:loginReducer,
    patientList:patientListReducer
  },
});

window.state = store