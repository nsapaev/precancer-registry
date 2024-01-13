import s from "./AddDiagnosis.module.css"
import React, {Fragment, useState} from "react";
import {Button, FormControl, FormGroup, FormLabel, FormSelect, Row} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {editDiagnosis} from "../../store/patientsList/patientListReducer";
import {useNavigate} from "react-router-dom";

function AddDiagnosis() {
    let patientID = sessionStorage.getItem("patientID")
    const patientList = useSelector(state => state.patientList)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log(" sessionStorage  ",patientID)
    console.log(patientList)

    let needObj = {}
    for (let i = 0; i < patientList.length; i++) {
        if (+patientList[i].registerID === +patientID) {
            console.log(patientList[i].registerID)
            needObj = {...patientList[i].diagnosis}
        }
    }

    let [organ, setOrgan] = useState(needObj.organ)
    let [complaint, setComplaint] = useState(needObj.complaint)
    let [diagnosis, setDiagnosis] = useState(needObj.diagnosis)
    let [suspicion, setSuspicion] = useState(needObj.suspicion)
    let [appointment, setAppointment] = useState(needObj.appointment)
    let [dateReAppointment, setDateReAppointment] = useState(needObj.dateReAppointment)
    let [fillingForm, setFillingForm] = useState(needObj.fillingForm)


    console.log(needObj)

    const setChangeDiagnosisOfPatient = () => {
        let payload = {
            diagnosis: {
                organ: organ,
                complaint: complaint,
                diagnosis: diagnosis,
                suspicion: suspicion,
                appointment: appointment,
                dateReAppointment: dateReAppointment,
                fillingForm: fillingForm
            },
            id:+patientID
        }
        dispatch(editDiagnosis(payload))
        navigate('/list-of-patients')
    }

    return (
        <div className={s.addDiagnosis}>
            <div></div>
            <div className={s.diagnosisForm1}>
                <div className={s.diagnosisForm1__title}>Диагноз Форма-1</div>

                <Fragment>
                    <Row>
                        <FormGroup className="form-group">
                            <FormLabel className="mb-0" htmlFor="email">Орган</FormLabel>
                            <FormControl
                                onChange={(e) => {
                                    setOrgan(e.target.value)
                                }}
                                type="text"
                                className="form-control my-2"
                                id="Проблемный орган пациента"
                                required
                                defaultValue={organ}
                            />
                        </FormGroup>
                        <FormGroup className="form-group">
                            <FormLabel className="mb-0" htmlFor="exampleFormControlTextarea1">
                                Жалоба
                            </FormLabel>
                            <textarea
                                onChange={(e) => {
                                    setComplaint(e.target.value)
                                }}
                                className="form-control my-2"
                                id="exampleFormControlTextarea1"
                                rows="4"
                                required
                                defaultValue={complaint}
                            ></textarea>
                        </FormGroup>
                        <FormGroup className="form-group">
                            <FormLabel className="mb-0" htmlFor="exampleFormControlTextarea1">
                                Диагноз
                            </FormLabel>
                            <textarea
                                onChange={(e) => {
                                    setDiagnosis(e.target.value)
                                }}
                                className="form-control my-2"
                                id="exampleFormControlTextarea1"
                                rows="4"
                                required
                                defaultValue={diagnosis}
                            ></textarea>
                        </FormGroup>
                        <FormGroup className="form-group">
                            <FormLabel className="mb-0" htmlFor="exampleFormControlSelect1">
                                Уровень подозрения
                            </FormLabel>
                            <FormSelect
                                onChange={(e) => {
                                    setSuspicion(e.target.value)
                                }}
                                className="form-select my-2"
                                id="exampleFormControlSelect1"
                                required

                            >
                                <option defaultValue disabled>
                                    {suspicion}
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
                                onChange={(e) => {
                                    setAppointment(e.target.value)
                                }}
                                className="form-control my-2"
                                id="exampleFormControlTextarea1"
                                rows="4"
                                required
                                defaultValue={appointment}
                            ></textarea>
                        </FormGroup>
                        <FormGroup className="form-group">
                            <FormLabel className="mb-0" htmlFor="exampleInputdatetime">
                                Дата м время повторного приёма пациента
                            </FormLabel>
                            <FormControl
                                onChange={(e) => {
                                    setDateReAppointment(e.target.value)
                                }}
                                type="datetime-local"
                                className="form-control my-2"
                                id="exampleInputdatetime"
                                defaultValue={dateReAppointment}
                                required

                            />
                        </FormGroup>

                        <FormGroup className="form-group">
                            <FormLabel className="mb-0" htmlFor="exampleInputdatetime">
                                Дата м время заполнения данной формы
                            </FormLabel>
                            <FormControl
                                onChange={(e) => {
                                    setFillingForm(e.target.value)
                                }}
                                type="datetime-local"
                                className="form-control my-2"
                                id="exampleInputdatetime"
                                defaultValue={fillingForm}
                                required
                            />
                        </FormGroup>


                        <Button onClick={setChangeDiagnosisOfPatient} type="submit" variant="primary" size="lg"
                                className=" me-2">
                            Сахранить внесённые данные
                        </Button>


                    </Row>
                </Fragment>


            </div>

        </div>
    )
}

export default AddDiagnosis
