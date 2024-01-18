import {Doughnut} from "react-chartjs-2";
import React from "react";


export default function ChartDonut({data}){
    const DoughnutChartOption ={
        labels: [`Мужчины - ${data.men}` , `Женщины - ${data.women}`, `дети - ${data.kid}`],
        datasets: [
            {
                label: 'Donut Chart',
                data: [data.men,data.women,data.kid],
                height:100,
                width:100,
                backgroundColor: [
                    'rgba(8, 155, 171, 1)',
                    'rgba(242, 99, 97, 1)',
                    'rgba(87, 222, 83, 1)',
                ],
                hoverOffset: 1
            }
        ]
    }
    return (
        <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                    <h4 className="card-title text-ce">Статистика по полу</h4>
                </div>
            </div>
            <div className="iq-card-body" style={{height: "430px", width: '430px'}}>
                <Doughnut data={DoughnutChartOption}/>
            </div>
        </div>
    )
}