import { createSlice } from '@reduxjs/toolkit';

export const initialState = [
    {
        registerID:1,
        fullName:"Ниязметов Расул",
        dateOfBorn:"2000-06-20",
        born: `Tashkent Tashkent shahar `,
        sex: "Мужской",
        phoneNumber:"+998 (91) 123 12 23",
        addressResidence:"Urgench, 13 rayon",
        receptionDate:"2024-01-18",
        diagnosis:{organ: "",
            complaint: "",
            diagnosis: "",
            suspicion: "",
            appointment: "",
            dateReAppointment: "",
            fillingForm: ""},
        hasDiagnosis:"диагноз не поставлен",
        registrationDate:"",
    },
    {
        registerID:2,
        fullName:"Ниязметов Расул",
        dateOfBorn:"2000-06-20",
        born: `Tashkent Tashkent shahar `,
        sex: "Женский",
        phoneNumber:"+998 (91) 123 12 23",
        addressResidence:"Urgench, 13 rayon",
        receptionDate:"2024-01-18",
        diagnosis:{organ: "",
            complaint: "",
            diagnosis: "",
            suspicion: "",
            appointment: "",
            dateReAppointment: "",
            fillingForm: ""},
        hasDiagnosis:"диагноз не поставлен",
        registrationDate:"",
    },
    {
        registerID:3,
        fullName:"Ниязметов Расул",
        dateOfBorn:"2000-06-20",
        born: `Tashkent Tashkent shahar `,
        sex: "Мужской",
        phoneNumber:"+998 (91) 123 12 23",
        addressResidence:"Urgench, 13 rayon",
        receptionDate:"2024-01-18",
        diagnosis:{organ: "",
            complaint: "",
            diagnosis: "",
            suspicion: "",
            appointment: "",
            dateReAppointment: "",
            fillingForm: ""},
        hasDiagnosis:"диагноз не поставлен",
        registrationDate:"",
    },
    {
        registerID:4,
        fullName:"Ниязметов Расул",
        dateOfBorn:"2010-06-20",
        born: `Tashkent Tashkent shahar `,
        sex: "Женский",
        phoneNumber:"+998 (91) 123 12 23",
        addressResidence:"Urgench, 13 rayon",
        receptionDate:"2024-01-18",
        diagnosis:{organ: "",
            complaint: "",
            diagnosis: "",
            suspicion: "",
            appointment: "",
            dateReAppointment: "",
            fillingForm: ""},
        hasDiagnosis:"диагноз не поставлен",
        registrationDate:"",
    },

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