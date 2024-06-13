import React from 'react';
import './App.css';
import ChangeUser from './pages/ChangeUser';
import Enter from './pages/Enter';
import Main from './pages/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path={routes.changeUser} element={<ChangeUser />}></Route>
        <Route path={routes.enter} element={<Enter />}></Route>
        <Route path={routes.main} element={<Main />}></Route>
        {/* <Route path={routes.schedule} element={<main />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
