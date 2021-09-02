import React, { createContext, useState } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return sessionStorage.getItem('token');
  });

  const value = {
    isAuth,
    activateAuth: (token) => {
      setIsAuth(true);
      sessionStorage.setItem('token', token);
    },
    removeAuth: () => {
      setIsAuth(false);
      sessionStorage.removeItem('token');
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Provider, Context };
