import React from 'react';
import { FC } from 'react';
import Calendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const Schedule: FC = () => {
    return (
        <>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <DropdownButton id="dropdown-basic-button" title="Выбрать предмет">
                                <Dropdown.Item href="#/action-1">предмет 1</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">предмет 2</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">предмет 3</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                        <Col>
                            <Button>Изменить расписание</Button>
                        </Col>
                    </Row>
                </Container>

                <Calendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    events={[
                        { title: 'Мероприятие 1', date: '2022-01-01' },
                        { title: 'Мероприятие 2', date: '2022-01-05' }
                    ]}
                />
            </div>
        </>
    );
};

export default Schedule;
