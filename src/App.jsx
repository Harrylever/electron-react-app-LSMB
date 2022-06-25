import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Student from './pages/Student/Student';
import Signup from './pages/AuthView/Signup/Signup'
import { Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <div className="container">
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/student/:id' exact element={<Student />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </div>
    );
};

export default App;
