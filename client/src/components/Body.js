import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from '../pages/Register';
import Home from '../components/Home';
import Login from '../pages/Login';
import AdminLogin from '../pages/AdminLogin';
import Task from '../pages/Task';

function Body({ setIsLoggedIn }) {
    return (
        <div className='body'>
            <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path='/adminlogin' element={<AdminLogin setIsLoggedIn={setIsLoggedIn}/>} />
                    <Route path='/task' element={<Task />} /> 
            </Routes>
        </div>
    )
}

export default Body;
