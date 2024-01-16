import {Col} from "react-bootstrap";
import React from "react";

export default function RequestsQuantity() {
    return (
            <Col md="6" lg="3">
                <div className="iq-card">
                    <div className="iq-card-body">
                        <div className="iq-progress-bar progress-bar-vertical iq-bg-primary progress">
                      <span
                          className="bg-primary"
                          data-percent="70"
                          data-toggle="progress-bar"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{width: "70%"}}
                      ></span>
                        </div>
                        <span className="line-height-4">10 feb, 2020</span>
                        <h4 className="mb-2 mt-2">Hypertensive Crisis</h4>
                        <p className="mb-0 text-secondary line-height">
                            Ongoing treatment
                        </p>
                    </div>
                </div>
            </Col>

    )
}