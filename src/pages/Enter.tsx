import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, CardBody } from 'react-bootstrap';
import { Formik, FormikHelpers } from 'formik';

interface FormValues {
    email: string;
    password: string;
}

const Enter: React.FC = () => {
    const handleFormSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
        // Обработка данных
    };

    return (
        <div className="container-fluid h-100">
            <div className="row justify-content-center align-content-center h-100">
                <div className="col-12 col-md-8 col-xxl-6">
                    <CardBody className="d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            onSubmit={handleFormSubmit}
                        >
                            {({ handleSubmit }) => (
                                <Form onSubmit={handleSubmit} className="form">
                                    <div className="text-center">
                                    <a href="https://imgbb.com/"><img src="https://i.ibb.co/cc7Zzth/Logomark-1.png" alt="Logomark-1" /></a>
                                    </div>
                                    <h1>Вход в Sirius Future</h1>
                                    <Form.Group className="mb-3">
                                        <Form.Control id="email" type="email" placeholder="E-mail" />
                                    </Form.Group>
                                    <Form.Group className="mb-3 position-relative">
                                        <Form.Control id="password" type="password" name="password" placeholder="Пароль"/>
                                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Check type="checkbox" label="Запомнить меня" />
                                    </Form.Group>
                                    <button type="submit" className="button w-100 center-button" >Войти</button>
                                    <div className="card-footer p-4">
                                        <div className="text-center">
                                            <Link to="#">Я забыл пароль</Link>
                                            {' '}
                                            <Link to="#">Войти как тренер</Link>
                                            <div>Нет аккаунта?</div>
                                            <Link to="#">Зарегистрироваться</Link>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </CardBody>

                    <div className="text-center">
                        <Button className="btn d-inline-block" variant="outline-primary">Ru</Button>
                        <Button className="btn d-inline-block" variant="outline-primary">En</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enter;