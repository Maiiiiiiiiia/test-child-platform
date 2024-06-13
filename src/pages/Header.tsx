import React from 'react';
import { Navbar } from 'react-bootstrap';
import { useState } from 'react';

const Header: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // тут тоже из стейта подтянуть пользователей
  // нужно будет добавлять новый слайс  

  // выход auth provider делать
  
  return (
    <Navbar className="header shadow-sm" expand="lg" bg="light">
      <Navbar.Brand className="d-flex justify-content-between align-items-center">
        <div className="circle left"></div>
        <div className="circle right" onClick={toggleDropdown}> тык сюда
          {showDropdown ? <span>&#10003;</span> : null}
        </div>
        {showDropdown && (
          <div className="dropdown-content">
            <div>
            <h3>Смена пользователя</h3>
            <p>Пользователь один</p>
            <p>Пользователь два</p>
            <h4>Выход</h4> 
            </div>
          </div>
        )}

      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
