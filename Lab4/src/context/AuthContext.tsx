import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextProps {
  user: { id: string; username: string } | null;
  token: string | null;
  login: (user: { id: string; username: string }, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ id: string; username: string } | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = (user: { id: string; username: string }, token: string) => {
    setUser(user);
    setToken(token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
