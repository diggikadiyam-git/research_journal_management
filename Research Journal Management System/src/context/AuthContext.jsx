// context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // On app load, check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));
    setLoading(false);
  }, []);

  // Login function
  const loginUser = async (email, password) => {
    try {
      const response = await axios.post(
        'http://localhost:8082/auth/login',
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      );
      setUser(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      return { success: true };
    } catch (err) {
      return { success: false, message: err.response?.data || 'Login failed' };
    }
  };

  // Register function
  const registerUser = async (userData) => {
    try {
      const response = await axios.post(
        'http://localhost:8082/auth/register',
        userData,
        { headers: { 'Content-Type': 'application/json' } }
      );
      setUser(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      return { success: true };
    } catch (err) {
      return { success: false, message: err.response?.data || 'Registration failed' };
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    loginUser,
    registerUser,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
