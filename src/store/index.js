import { configureStore } from "@reduxjs/toolkit";
import settingReducer from "./setting/reducers";
import loginReducer from "./login/loginReducer";
import patientListReducer from "./patientsList/patientListReducer";
import statsReducer from "./stats/statsReducer";

export const store = configureStore({
  reducer: {
    setting: settingReducer,
    login:loginReducer,
    patientList:patientListReducer,
    stats:statsReducer
  },
});

window.state = store