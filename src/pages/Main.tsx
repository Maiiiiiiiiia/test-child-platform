import React, { FC, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../slices'; // Подставьте свои типы RootState и AppDispatch
import { selectSection } from '../slices/menuSlice';
import Header from './Header';
import ChangeUser from './ChangeUser';
import Schedule from './Schedule';
import PaymentComponent from './PaymentComponent';
import AchievementsComponent from './AchievementsComponent';
import TrainComponent from './TrainComponent';
import LibraryComponent from './LibraryComponent';
import ExaminationComponent from './ExaminationComponent';
import SettingsComponent from './SettingsComponent';
import QaComponent from './QaComponent';

const Main: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const selectedSection: string = useSelector((state: RootState) => state.menu.selectedSection);
  const [selectedClass, setSelectedClass] = useState<string>('');

  const handleMenuClick = (section: string): void => {
    dispatch(selectSection(section));
    setSelectedClass(section);
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'changeUser':
        return <ChangeUser />;
      case 'schedule':
        return <Schedule />;
      case 'payment':
        return <PaymentComponent />;
      case 'achievements':
        return <AchievementsComponent />;
      case 'train':
        return <TrainComponent />;
      case 'library':
        return <LibraryComponent />;
      case 'examination':
        return <ExaminationComponent />;
      case 'settings':
        return <SettingsComponent />;
      case 'qa':
        return <QaComponent />;
      default:
        return null;
    }
  };

  return (
    <div className="h-100 d-flex flex-column justify-content-between">
      <Header />
      <Row className="bg-white h-100">
        <Col md={2} className="menu px-4 py-4 bg-light flex-column d-flex">
          <Col className="menu border-end flex-column d-flex rounded">
            <img src="https://i.ibb.co/MCm5rgr/logo.png" alt="logo" />
            <ul id="menu-box" className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block">
              <div onClick={() => handleMenuClick('changeUser')} className={selectedClass === 'changeUser' ? 'selected-section-color' : ''}>
              <img src="https://i.ibb.co/7R33KnJ/menu-element.png" alt="menu-element" />
              </div>
              <div onClick={() => handleMenuClick('schedule')} className={selectedClass === 'schedule' ? 'selected-section-color' : ''}>
              <img src="https://i.ibb.co/0Bzb1s9/menu-element-1.png" alt="menu-element-1" />
              </div>
              <div onClick={() => handleMenuClick('payment')} className={selectedClass === 'payment' ? 'selected-section-color' : ''}>
              <img src="https://i.ibb.co/qJ4fRhB/menu-element-2.png" alt="menu-element-2" />
              </div>
              <div onClick={() => handleMenuClick('achievements')} className={selectedClass === 'achievements' ? 'selected-section-color' : ''}>
              <img src="https://i.ibb.co/dW71MnM/menu-element-3.png" alt="menu-element-3" />
              </div>
              <div onClick={() => handleMenuClick('train')} className={selectedClass === 'train' ? 'selected-section-color' : ''}>
              <img src="https://i.ibb.co/PWMJQ2M/menu-element-4.png" alt="menu-element-4" />
              </div>
              <div onClick={() => handleMenuClick('library')} className={selectedClass === 'library' ? 'selected-section-color' : ''}>
              <img src="https://i.ibb.co/FJ084d9/menu-element-5.png" alt="menu-element-5" />
              </div>
              <div onClick={() => handleMenuClick('examination')} className={selectedClass === 'examination' ? 'selected-section-color' : ''}>
              <img src="https://i.ibb.co/DRgkrs4/menu-element-6.png" alt="menu-element-6" />
              </div>
              <div onClick={() => handleMenuClick('settings')} className={selectedClass === 'settings' ? 'selected-section-color' : ''}>
              <img src="https://i.ibb.co/qpyXqhp/menu-element-7.png" alt="menu-element-7" />
              </div>
              <div onClick={() => handleMenuClick('qa')} className={selectedClass === 'qa' ? 'selected-section-color' : ''}>
              <img src="https://i.ibb.co/KmQ91LV/menu-element-8.png" alt="menu-element-8" />
              </div>
            </ul>
          </Col>
        </Col>
        <Col md={10}>
          {renderContent()}
        </Col>
      </Row>
    </div>
  );
};

export default Main;
