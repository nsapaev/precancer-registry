import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        registerID:1,
        fullName:"Ниязметов Расул",
        born: `Tashkent  Tashkent shahar 20.06.2000`,
        sex: "Мужской",
        phoneNumber:"+998 (91) 123 12 23",
        addressResidence:"Urgench, 13 rayon",
        receptionDate:"10.01.2024",
        diagnosis:{organ: "",
            complaint: "",
            diagnosis: "",
            suspicion: "",
            appointment: "",
            dateReAppointment: "",
            fillingForm: ""},
        hasDiagnosis:"",
        registrationDate:"",
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
        },
        editDiagnosis:(state,{payload})=>{
            state.forEach(patient => {
                if(+patient.registerID === +payload.id){
                    patient.diagnosis = payload.diagnosis
                    patient.hasDiagnosis = "диагноз был изменён"
                }
            })
        }
    }
})

export default patientListReducer.reducer
export const {addPatient,editDiagnosis} = patientListReducer.actions