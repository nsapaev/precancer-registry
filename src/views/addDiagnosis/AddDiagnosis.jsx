
import s from "./AddDiagnosis.module.css"
import React, {Fragment} from "react";
import {Button, FormControl, FormGroup, FormLabel, FormSelect, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function AddDiagnosis() {


    return (
        <div className={s.addDiagnosis}>
            <div></div>
            <div className={s.diagnosisForm1}>
                <div className={s.diagnosisForm1__title} >Диагноз Форма-1</div>
                <Fragment>
                    <Row>
                        <FormGroup className="form-group">
                            <FormLabel className="mb-0" htmlFor="email">Орган</FormLabel>
                            <FormControl
                                type="text"
                                className="form-control my-2"
                                id="Проблемный орган пациента"
                            />
                        </FormGroup>
                        <FormGroup className="form-group">
                            <FormLabel className="mb-0" htmlFor="exampleFormControlTextarea1">
                                Жалоба
                            </FormLabel>
                            <textarea
                                className="form-control my-2"
                                id="exampleFormControlTextarea1"
                                rows="4"
                            ></textarea>
                        </FormGroup>
                        <FormGroup className="form-group">
                            <FormLabel className="mb-0" htmlFor="exampleFormControlTextarea1">
                                Диагноз
                            </FormLabel>
                            <textarea
                                className="form-control my-2"
                                id="exampleFormControlTextarea1"
                                rows="4"
                            ></textarea>
                        </FormGroup>
                        <FormGroup className="form-group">
                            <FormLabel className="mb-0" htmlFor="exampleFormControlSelect1">
                                Уровень подозрения
                            </FormLabel>
                            <FormSelect
                                className="form-select my-2"
                                id="exampleFormControlSelect1"
                            >
                                <option defaultValue disabled>
                                    Уровень подозрения
                                </option>
                                <option>слабое</option>
                                <option>среднее</option>
                                <option>сильное</option>
                            </FormSelect>
                        </FormGroup>
                        <FormGroup className="form-group">
                            <FormLabel className="mb-0" htmlFor="exampleFormControlTextarea1">
                                Назначение
                            </FormLabel>
                            <textarea
                                className="form-control my-2"
                                id="exampleFormControlTextarea1"
                                rows="4"
                            ></textarea>
                        </FormGroup>
                        <FormGroup className="form-group">
                            <FormLabel className="mb-0" htmlFor="exampleInputdatetime">
                                Дата м время повторного приёма пациента
                            </FormLabel>
                            <FormControl
                                type="datetime-local"
                                className="form-control my-2"
                                id="exampleInputdatetime"
                                defaultValue="2019-12-19T13:45:00"
                            />
                        </FormGroup>

                        <FormGroup className="form-group">
                            <FormLabel className="mb-0" htmlFor="exampleInputdatetime">
                                Дата м время заполнения данной формы
                            </FormLabel>
                            <FormControl
                                type="datetime-local"
                                className="form-control my-2"
                                id="exampleInputdatetime"
                                defaultValue="2019-12-19T13:45:00"
                            />
                        </FormGroup>


                           <Button  variant="primary" size="lg" className=" me-2">
                               Сахранить внесённые данные
                           </Button>


                    </Row>
                </Fragment>
            </div>

        </div>
    )
}

export default AddDiagnosis
