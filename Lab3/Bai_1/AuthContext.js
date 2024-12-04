// 21522081 - Le Tan Hoa
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email, password) => {
    if (email === '12345678@gm.uit.edu.vn' && password === 'nguyenvana') {
      setIsAuthenticated(true);
    } else {
      alert('Sai email hoặc mật khẩu!');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
// 