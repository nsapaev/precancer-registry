import React, {Fragment} from "react"
import {Col, Row, Table} from "react-bootstrap";
import {useSelector} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";
import AddDiagnosis from "../addDiagnosis/AddDiagnosis";

function ListPatientComponent() {
    const state = useSelector(state => state.patientList)
    const navigate = useNavigate()
    const editPatientDiagnosis = (patientID) => {
        sessionStorage.setItem("patientID", patientID)
        navigate('/add-diagnosis')
    }





    return (
        <Fragment>
            <Row>
                <Col sm='12'>
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Список Пациентов</h4>
                            </div>
                        </div>
                        <div className="iq-card-body">

                            <div className="table-responsive">
                                <Table id="datatable" className="" bordered striped>
                                    <thead>
                                    <tr>
                                        <th>Номер регистрации</th>
                                        <th>ФИО</th>
                                        <th>Дата, место рождения</th>
                                        <th>Пол</th>
                                        <th>Номер телефона</th>
                                        <th>Место рождения</th>
                                        <th>Дата сл. приёма</th>
                                        <th>Диагноз</th>
                                        <th>Дата регистрации</th>
                                    </tr>

                                    </thead>
                                    <tbody>
                                    {
                                        state.map((patient, index) => {
                                            return <tr key={index}>
                                                <td>{patient.registerID}</td>
                                                <td>{patient.fullName}</td>
                                                <td>{patient.born}</td>
                                                <td>{patient.sex}</td>
                                                <td>{patient.phoneNumber}
                                                    <button     > send message</button>
                                                </td>
                                                <td>{patient.addressResidence}</td>
                                                <td>{patient.receptionDate}</td>
                                                <td>{patient.hasDiagnosis}
                                                    <button onClick={() => {
                                                        editPatientDiagnosis(patient.registerID)
                                                    }}>edit
                                                    </button>
                                                </td>
                                                <td>{patient.registrationDate}</td>
                                            </tr>
                                        })
                                    }
                                    </tbody>

                                </Table>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

        </Fragment>
    )
}

export default ListPatientComponent