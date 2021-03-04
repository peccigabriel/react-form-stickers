import React, { createContext, useContext } from 'react';

const Context = createContext();

export function StickersProvider({ children, ...props }) {
  return <Context.Provider value={{ ...props }}>{children}</Context.Provider>;
}

export function useStickersContext() {
  const context = useContext(Context);
  return context;
}
