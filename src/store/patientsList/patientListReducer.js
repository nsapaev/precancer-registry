import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        registerID:1,
        fullName:"Ниязметов Расул",
        born: `Tashkent  Tashkent shahar 20.06.2000`,
        sex: "Мужской",
        phoneNumber:"+998 (91) 123 12 23",
        addressResidence:"ASDASDASDASD",
        receptionDate:"10.01.2024",
        diagnosis:"диагноз не задан",
        registrationDate:"23.12.2023"
    }

]

const patientListReducer = createSlice({
    name: 'patientList',
    initialState,
    reducers: {
        addPatient: (state,{payload})=>{
            if(payload.hasDiagnosis){
                payload.hasDiagnosis = "диагноз поставлен"
            }else{
                payload.hasDiagnosis = "диагноз не поставлен"
            }

            state.unshift({...payload})
        }
    }
})

export default patientListReducer.reducer
export const {addPatient} = patientListReducer.actions