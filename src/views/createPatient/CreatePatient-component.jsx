import React, {Fragment, useState,} from "react"
import {Row, FormControl, FormGroup, FormLabel, FormSelect, Button, Form} from "react-bootstrap";
import s from "./CreatePatient-component.module.css"
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import {addPatient} from "../../store/patientsList/patientListReducer";

/*
        registerID: 1,
        fullName: "Ниязметов Расул",
        birthDate: "20.06.2000",
        birthPlace: "Ташкент",
        sex: "Мужской",
        nextReceptionDate: "11.03.2024",
        diseaseStage: " пигментная ксеродерма"
*/

export function CreatePatientComponent(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let [showDiagnosisPage, setShowDiagnosisPage] = useState(false)

    // ? validate form
    const [validated, setValidated] = useState(false);
    const [validatedForDiagnosisForm, setValidatedForDiagnosisForm] = useState(false);
    const [checkValidate, setCheckValidate] = useState(false)
    const [checkValidatedForDiagnosisForm, setCheckValidatedForDiagnosisForm] = useState(false);

    const handleSubmit = (event) => {

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else{
            setCheckValidate(true)
        }

        setValidated(true);



    };
    const handleSubmitForDiagnosisForm = (event) => {

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else{
            setCheckValidatedForDiagnosisForm(true)
        }

        setValidatedForDiagnosisForm(true);



    };


    // ? useState for Create Patient
    let [registerID, setRegisterID] = useState("")
    let [fullName, setFullName] = useState("")
    let [birthDate, setBirthDate] = useState('')
    let [birthArea, setBirthArea] = useState('')
    let [birthCity, setBirthCity] = useState('')
    let [addressResidence, setAddressResidence] = useState("")
    let [sex, setSex] = useState("")
    let [phoneNumber, setPhoneNumber] = useState("")
    let [registrationDate, setRegistrationDate] = useState("")


    // ? useState for Diagnosis
    let [organ, setOrgan] = useState('')
    let [complaint, setComplaint] = useState('')
    let [diagnosis, setDiagnosis] = useState('')
    let [suspicion, setSuspicion] = useState('')
    let [appointment, setAppointment] = useState('')
    let [dateReAppointment, setDateReAppointment] = useState('')
    let [fillingForm, setFillingForm] = useState('')


    const addPatientWithoutDiagnosis = (e, bool = false, addDiagnosis = false) => {
        e.preventDefault()

        if(!checkValidate) return;
        let diagnosisData = {
            organ: organ,
            complaint: complaint,
            diagnosis: diagnosis,
            suspicion: suspicion,
            appointment: appointment,
            dateReAppointment: dateReAppointment,
            fillingForm: fillingForm
        }
        const payload = {
            registerID: registerID,
            fullName: fullName,
            born: `${birthArea}, ${birthCity}, ${birthDate}`,
            sex: sex,
            addressResidence: addressResidence,
            phoneNumber: phoneNumber,
            diagnosis: diagnosisData,
            hasDiagnosis: addDiagnosis,
            registrationDate: registrationDate
        }
        if (bool) {

            setShowDiagnosisPage(true)
            return
        } else {

        }
        dispatch(addPatient(payload))
        navigate('/list-of-patients')
    }


    return (
        <>
            {!showDiagnosisPage && <Form  validated={validated}
                                          onClick={handleSubmit}
                                         className={s.CreatePatientComponent__form}>

                            <div className={s.CreatePatientComponent}>
                                <FormGroup className="form-group">
                                    <FormLabel className="mb-0" htmlFor="pwd">ФИО:</FormLabel>
                                    <FormControl
                                        onChange={(e) => {
                                            setFullName(e.target.value)
                                        }}
                                        value={fullName}
                                        type="text"
                                        className="form-control my-2"
                                        id="pwd"
                                        placeholder="ФИО"
                                       required

                                    />
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <FormLabel className="mb-0" htmlFor="pwd">Уникальный номер пациента:</FormLabel>
                                    <FormControl
                                        onChange={(e) => {
                                            setRegisterID(e.target.value)
                                        }}
                                        value={registerID}
                                        type="number"
                                        className="form-control my-2"
                                        placeholder="Номер при регистрации"
                                        required
                                    />
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <FormLabel className="mb-0" htmlFor="exampleInputdate">Дата рождения</FormLabel>
                                    <FormControl
                                        onChange={(e) => {
                                            setBirthDate(e.target.value)
                                        }}
                                        value={birthDate}
                                        className="form-control my-2"
                                        id="exampleInputdate"
                                        type="date"
                                        required
                                    />
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <FormLabel className="mb-0" htmlFor="exampleFormControlSelect1">
                                        Выберите область
                                    </FormLabel>
                                    <FormSelect
                                        onChange={(e) => {
                                            setBirthArea(e.target.value)
                                        }}
                                        className="form-select my-2"
                                        id="exampleFormControlSelect1"
                                        required
                                    >
                                        <option defaultValue>
                                            Tashkent
                                        </option>
                                        <option>Хорезм</option>
                                    </FormSelect>
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <FormLabel className="mb-0" htmlFor="exampleFormControlSelect1">
                                        Выберите город, район
                                    </FormLabel>
                                    <FormSelect
                                        onChange={(e) => {
                                            setBirthCity(e.target.value)
                                        }}
                                        className="form-select my-2"
                                        id="exampleFormControlSelect1"
                                        required
                                    >
                                        <option defaultValue>
                                            Toshkent shahri
                                        </option>
                                        <option>Ургенч</option>

                                    </FormSelect>
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <FormLabel className="mb-0" htmlFor="pwd">Адрес места проживания:</FormLabel>
                                    <FormControl
                                        onChange={(e) => {
                                            setAddressResidence(e.target.value)

                                        }}
                                        required
                                        type="text"
                                        className="form-control my-2"
                                        id="pwd"
                                        placeholder="Адрес места проживания"
                                        value={addressResidence}
                                    />
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <FormLabel className="mb-0" htmlFor="exampleFormControlSelect1">
                                        Пол
                                    </FormLabel>
                                    <FormSelect
                                        onChange={(e) => {
                                            setSex(e.target.value)
                                        }}
                                        className="form-select my-2"
                                        id="exampleFormControlSelect1"
                                        required
                                    >
                                        <option defaultValue>
                                            мужской
                                        </option>
                                        <option>Женский</option>
                                    </FormSelect>
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <FormLabel className="mb-0" htmlFor="pwd">Номер телефона:</FormLabel>
                                    <FormControl
                                        onChange={(e) => {
                                            setPhoneNumber(e.target.value)
                                        }}
                                        type="number"
                                        value={phoneNumber}
                                        className="form-control my-2"
                                        id="pwd"
                                        placeholder="Номер телефона"
                                        required
                                    />
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <FormLabel className="mb-0" htmlFor="exampleInputdatetime">
                                        Дата регистрации
                                    </FormLabel>
                                    <FormControl
                                           onChange={(e) => {
                                            setRegistrationDate(e.target.value)
                                        }}
                                        type="datetime-local"
                                        className="form-control my-2"
                                        id="exampleInputdatetime"
                                        defaultValue={"2019-12-19T13:45:00"}
                                        required
                                    />
                                </FormGroup>

                                <div className={s.CreatePatientComponent__buttonsGroup}>
                                    <FormGroup className="form-group">
                                        <Button
                                            onClick={(e) => {
                                                addPatientWithoutDiagnosis(e, true)
                                            }}
                                            variant="primary"
                                            size="lg" className=" me-2"
                                            type="submit"
                                        >

                                            Прикрепить диагноз
                                        </Button>
                                    </FormGroup>

                                    <FormGroup className="form-group">
                                        <Button
                                            onClick={(e) => {
                                                addPatientWithoutDiagnosis(e, false)
                                            }}
                                            variant="success"
                                            size="lg" className=" me-2"
                                            type="submit"
                                        >
                                            Добавить без диагноза
                                        </Button>
                                    </FormGroup>

                                </div>
                            </div>

            </Form>}


            {showDiagnosisPage && <div className={s.addDiagnosis}>
                <div></div>
                <div className={s.diagnosisForm1}>
                    <div className={s.diagnosisForm1__title}>Диагноз Форма-1</div>
                    <Fragment>
                        <Row>
                            <Form validated={validatedForDiagnosisForm}
                                  onClick={handleSubmitForDiagnosisForm}>


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
                                    onChange={(e) => {
                                        setAppointment(e.target.value)
                                    }}
                                    className="form-control my-2"
                                    id="exampleFormControlTextarea1"
                                    rows="4"
                                    required
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
                                    defaultValue="2019-12-19T13:45:00"
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
                                    defaultValue="2019-12-19T13:45:00"
                                    required
                                />
                            </FormGroup>


                            <Button
                                onClick={(e) => {
                                    addPatientWithoutDiagnosis(e,false,true)
                                }}
                                variant="primary"
                                type={"submit"}
                                size="lg" className=" me-2"
                            >
                                Сахранить внесённые данные
                            </Button>
                            </Form>
                        </Row>
                    </Fragment>
                </div>

            </div>}

        </>


    )
}




