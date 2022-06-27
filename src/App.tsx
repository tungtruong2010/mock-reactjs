import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Table from './components/Table';
import {BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Home from './pages/Home';
import Respo1 from './pages/respo1';
import { Provider } from 'react-redux';
import store from "./redux/store";
import { combineReducers, createStore } from 'redux';
import { User } from './redux/reducer/reducer';
function App() {
  const rootReducer = combineReducers({
    content: User,
  });

  const store = createStore(rootReducer);
  return (
    <BrowserRouter>
      <Routes>
      <Route
      path='*'
        element={<Navigate to="/respo1" replace />}
      />
        {/* <Route path='/home' element = {<Home/>}></Route> */}
        <Route path='/respo1' element={<Home />} />
        <Route path='/respo2' element={<Respo1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
