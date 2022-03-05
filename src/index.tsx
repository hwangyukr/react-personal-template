import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Home from 'src/pages/Home/index';
import './index.scss';
ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>,
    document.getElementById('root'),
);
