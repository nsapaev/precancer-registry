import {Col} from "react-bootstrap";
import React, {createRef} from "react";
import s from "./monitoring-page.module.css"

export default function RequestsQuantity({title, quantity}) {


    let ref = createRef()
    const asdasd =(e)=>{
        e.preventDefault()
        console.log(ref.current.value)
    }

    return (
        <div className={s.requestsQuantity}>
            <div className={s.requestsQuantity__body} style={{height: "100%"}}>
                <div className="iq-progress-bar progress-bar-vertical iq-bg-primary progress">

                </div>
                <h4 className="mb-2 mt-2">{title}</h4>
                <p className="mb-0 text-secondary line-height">
                    <h3>{quantity}</h3>
                </p>
            </div>
        </div>
)
}