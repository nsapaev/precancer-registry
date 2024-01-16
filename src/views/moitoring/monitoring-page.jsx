import React from "react";
import s from "./monitoring-page.module.css"
import RequestsQuantity from "./requestsQuantity";


export default function MonitoringPage() {
    return (
        <div className={s.monitoringPage}>

            <div className={s.requestQuantitys}>
                <RequestsQuantity/>
                <RequestsQuantity/>
                <RequestsQuantity/>
                <RequestsQuantity/>
            </div>
        </div>

    )
}