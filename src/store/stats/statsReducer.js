import {createSlice} from '@reduxjs/toolkit';
import {initialState as patients} from "../patientsList/patientListReducer";
import {DateTime} from "luxon";


const initialState = {
    patientsList: [...patients],
    statsForQuantity: {
        all: 0,
        lastMonth: {
            month: "",
            quantity: 0
        },
        lastSevenDays: 0,
        today:0
    },
    statsForSex:{
        men:0,
        women:0,
        kids:0
    }
}


const statsReducer = createSlice({
    name: "stats",
    initialState,
    reducers: {
        getStats: (state, action) => {
            // ! filter quantity
            {
                //  get all patients
                state.statsForQuantity.all = state.patientsList.length

                // get patients for month, weak, day
                // get month
                const now = new Date()
                const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
                if (!months[now.getMonth() - 1]) {
                    state.statsForQuantity.lastMonth.month = months[11]
                } else {
                    for (let i = 0; i < months.length; i++) {
                        if (i === now.getMonth() - 1) {
                            state.statsForQuantity.lastMonth.month = months[i]
                        }
                    }
                }

                //get patients
                const milisecondsInOneMonth = 2592000000
                const milisecondsInOneDay = 86400000
                const getDate = new Date().getDate()

                let lastMonthCount = 0
                let lastSevenDaysCount = 0
                let todayCount= 0

                state.patientsList.forEach(patient => {
                    let examinedNumber = now - (milisecondsInOneMonth + milisecondsInOneDay * (getDate + 1))
                    let patientDate = new Date(patient.receptionDate).getTime()
                    let nowFullDate = `${now.getFullYear()}-${now.getMonth()+1 > 9 ? now.getMonth()+1 : '0'+(now.getMonth()+1)}-${now.getDate()>9?now.getDate():"0"+now.getDate()}`
                    if(patient.receptionDate === nowFullDate ){
                        todayCount++
                    }
                    if (patientDate > now - milisecondsInOneDay * 7) {
                        lastSevenDaysCount++
                    }
                    if (patientDate > examinedNumber && patientDate < examinedNumber + milisecondsInOneMonth) {
                        lastMonthCount++
                    }

                })
                state.statsForQuantity.lastMonth.quantity = lastMonthCount
                state.statsForQuantity.lastSevenDays = lastSevenDaysCount
                state.statsForQuantity.today = todayCount

            }
            //! filter patients for sex
            {

                let men = 0
                let women = 0
                let kids = 0
                state.patientsList.forEach(patient=>{
                    const dateOfBorn = new Date(patient.dateOfBorn).getFullYear()
                    const dateNow = new Date().getFullYear()
                    console.log(patient.sex)
                    console.log(dateOfBorn)
                    if(patient.sex.toLowerCase() === "мужской" && dateNow-dateOfBorn > 17 ){
                        men++
                    }
                    if(patient.sex.toLowerCase() === "женский" && dateNow-dateOfBorn > 17 ){
                        women++
                    }
                    if(dateNow-dateOfBorn <= 17){
                        kids++
                    }

                })

                state.statsForSex.men = men
                state.statsForSex.women = women
                state.statsForSex.kids = kids

            }


        }
    }
})

export default statsReducer.reducer
export const {getStats} = statsReducer.actions