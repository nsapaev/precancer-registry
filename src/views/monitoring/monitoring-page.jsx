import React, {useState,useEffect} from "react";
import s from "./monitoring-page.module.css"
import RequestsQuantity from "./requestsQuantity";
import {useSelector, useDispatch} from "react-redux"
import {getStats} from "../../store/stats/statsReducer";
import {DateTime} from "luxon";


export default function MonitoringPage() {

    const dispatch = useDispatch()
    const patients = useSelector(state => state.stats)
    let allPatient = patients.statsForQuantity.all
    let monthPatient = {
        month:patients.statsForQuantity.lastMonth.month,
        quantity:patients.statsForQuantity.lastMonth.quantity,
    }
    let weakPatient = patients.statsForQuantity.lastSevenDays
    let dayPatient = patients.statsForQuantity.today
    let todayIs = [new Date().getDate() < 9 ? ("0" + (new Date().getMonth() + 1)) : `${new Date().getDate()}`, new Date().getMonth() < 9 ? ("0" + (new Date().getMonth() + 1)) : `${new Date().getMonth() + 1}`, `${new Date().getFullYear()}`].join(".")


    useEffect(() => {
        dispatch(getStats())
    }, []);



    return (
        <div className={s.monitoringPage}>

            <div className={s.section__requestQuantitys}>
                <h3>Количество обращений</h3>
                <div className={s.requestQuantitys}>
                    <RequestsQuantity title={"Общее"} quantity={allPatient}/>
                    <RequestsQuantity title={monthPatient.month} quantity={monthPatient.quantity}/>
                    <RequestsQuantity title={"Последняя неделя"} quantity={weakPatient}/>
                    <RequestsQuantity title={"сегодгня"} quantity={dayPatient}/>
                </div>
            </div>
        </div>

    )
}