import React, {Fragment,} from "react"
import {Row, FormControl, FormGroup, FormLabel, FormSelect, Button} from "react-bootstrap";
import s from "./CreatePatient-component.module.css"
import {useNavigate} from "react-router-dom";

function CreatePatientComponent(props) {
    const navigate = useNavigate()
    const handlerAddPatient = () =>{
        navigate("/add-diagnosis")
    }
    return (


        <form className={s.CreatePatientComponent__form}>
            <div className={s.CreatePatientComponent}>
                <Fragment>
                    <Row>
                        <FormGroup className="form-group">
                            <FormLabel className="mb-0" htmlFor="pwd">ФИО:</FormLabel>
                            <FormControl
                                type="text"
                                className="form-control my-2"
                                id="pwd"
                                placeholder="ФИО"
                            />
                        </FormGroup>

                        <FormGroup className="form-group">
                            <FormLabel className="mb-0" htmlFor="pwd">Уникальный номер пациента:</FormLabel>
                            <FormControl
                                type="number"
                                className="form-control my-2"
                                placeholder="Номер при регистрации"
                            />
                        </FormGroup>
                        <FormGroup className="form-group">
                            <FormLabel className="mb-0" htmlFor="exampleInputdate">Дата рождения</FormLabel>
                            <FormControl
                                type="date"
                                className="form-control my-2"
                                id="exampleInputdate"
                                defaultValue="2019-12-18"
                            />
                        </FormGroup>
                        <FormGroup className="form-group">
                            <FormLabel className="mb-0" htmlFor="exampleFormControlSelect1">
                                Выберите область
                            </FormLabel>
                            <FormSelect
                                className="form-select my-2"
                                id="exampleFormControlSelect1"
                            >
                                <option defaultValue>
                                    Ташкент
                                </option>
                                <option>Хорезм</option>
                            </FormSelect>
                        </FormGroup>
                        <FormGroup className="form-group">
                            <FormLabel className="mb-0" htmlFor="exampleFormControlSelect1">
                                Выберите город, район
                            </FormLabel>
                            <FormSelect
                                className="form-select my-2"
                                id="exampleFormControlSelect1"
                            >
                                <option defaultValue>
                                    Ташкент шахар
                                </option>
                                <option>Ургенч</option>
                            </FormSelect>
                        </FormGroup>
                        <FormGroup className="form-group">
                            <FormLabel className="mb-0" htmlFor="pwd">Адрес места проживания:</FormLabel>
                            <FormControl
                                type="text"
                                className="form-control my-2"
                                id="pwd"
                                placeholder="Адрес места проживания"
                            />
                        </FormGroup>
                        <FormGroup className="form-group">
                            <FormLabel className="mb-0" htmlFor="pwd">Адрес полеклиники:</FormLabel>
                            <FormControl
                                type="text"
                                className="form-control my-2"
                                id="pwd"
                                placeholder="Адрес полеклиники"
                            />
                        </FormGroup>
                        <FormGroup className="form-group">
                            <FormLabel className="mb-0" htmlFor="exampleFormControlSelect1">
                                Пол
                            </FormLabel>
                            <FormSelect
                                className="form-select my-2"
                                id="exampleFormControlSelect1"
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
                                type="number"
                                className="form-control my-2"
                                id="pwd"
                                placeholder="Номер телефона"
                            />
                        </FormGroup>
                        <FormGroup className="form-group">
                            <FormLabel className="mb-0" htmlFor="exampleInputdatetime">
                                Дата регистрации
                            </FormLabel>
                            <FormControl
                                type="datetime-local"
                                className="form-control my-2"
                                id="exampleInputdatetime"
                                defaultValue="2019-12-19T13:45:00"
                            />
                        </FormGroup>
                        <Button onClick={handlerAddPatient} variant="primary" size="lg" className=" me-2">
                            Добавить пациента
                        </Button>

                    </Row>
                </Fragment>
            </div>
        </form>


    )
}

export default CreatePatientComponent