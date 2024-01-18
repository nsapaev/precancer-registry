import {Bar} from "react-chartjs-2";
import React from "react";


export default function BarChart(){
    const BarChartOption = {
        labels: ['August', 'September', 'October', 'November', 'December', 'January', 'February'],
        datasets: [{
            label: 'Статистика выкл/вкл',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: true,
            backgroundColor: 'rgba(8, 155, 171, 1)',
            borderColor: 'rgba(8, 155, 171, 1)',
            tension: 0.1
        }]
    }
    return (
        <div>
            <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                        <h4 className="card-title">Статистика по полу</h4>
                    </div>
                </div>
                <div className="iq-card-body">
                    <Bar data={BarChartOption}/>
                </div>
            </div>
        </div>
    )

}
