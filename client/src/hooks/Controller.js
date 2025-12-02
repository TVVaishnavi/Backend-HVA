import React, { useContext, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const list = createContext();

const Controller = ({ children }) => {
    const navigate = useNavigate();
    const [userDetail, setUserDetail] = useState(null);
    const [userLogin, setUserLogin] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    const signup = async (data) => {
        try {
            console.log("Signup data: ", data);
            const response = await api.post('/user/register', data);

            if (response.status === 201) {
                console.log("Registration successful");
                navigate('/login');
            } else {
                console.log(response.data.message || "Signup failed");
            }

        } catch (error) {
            console.error("Error during signup: ", error);
        }
    };


    const findUser = async () => {
        try {
            const user = localStorage.getItem('userDetail');
            if (user) {
                setUserDetail(JSON.parse(user));
                setUserLogin(true);
            } else {
                setUserLogin(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const saveUser = async (user) => {
        try {
            localStorage.setItem('userDetail', JSON.stringify(user));
            setUserDetail(user);

            setAdmin(user.role === 'admin')
            setUserLogin(true)
        } catch (error) {
            console.log(error);
        }
    }

    const saveToken = (token) => {
        localStorage.setItem('usertoken', token);
    }

    const login = async (userData) => {
        try {
            const response = await api.post('/login', userData);
            saveToken(response.data.token);
            localStorage.setItem("role", response.data.role.toLowerCase());
            const userFromServer = {
                email: response.data.email || userData.email,
                role: response.data.role
            };
            saveUser(userFromServer);
            return response.data;

        } catch (error) {
            setUserLogin(false);
            console.log(error.response?.data || error.message);
            throw error;
        }
    }

    const fetchTask = async (setTasks, setLoading) => {
        try {
            const token = localStorage.getItem("usertoken");

            const response = await api.get("/tasks", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log("TASK RESPONSE:", response.data);

            setTasks(response.data);
        } catch (error) {
            console.error("Error fetching tasks:", error.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <list.Provider value={{ signup, login, fetchTask }}>
            {children}
        </list.Provider>
    )
}

export const useAuthList = () => React.useContext(list);

export default Controller
