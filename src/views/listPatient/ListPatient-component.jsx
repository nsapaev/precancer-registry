import React, {Fragment} from "react"
import {Col, Row, Table} from "react-bootstrap";

function ListPatientComponent() {

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
                                <Table id="datatable" className="" bordered striped >
                                    <thead>
                                    <tr>
                                        <th>Номер регистрации</th>
                                        <th>ФИО</th>
                                        <th>Дата рождения</th>
                                        <th>Место рождения</th>
                                        <th>Пол</th>
                                        <th>Дата сл. приёма</th>
                                        <th>Стадия болезни</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>321</td>
                                        <td>Ниязметов Расул</td>
                                        <td>20.06.2000</td>
                                        <td>Ташкент</td>
                                        <td>Мужской</td>
                                        <td>11.03.2024</td>
                                        <td>пигментная ксеродерма</td>

                                    </tr>


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