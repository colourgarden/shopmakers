import { createContext, useContext } from 'react';

const Context = createContext({ blogs: [''] });

export function AppContext({ children, blogs }: AppContextProps) {
  return (
    <Context.Provider
      value={{
        blogs: blogs,
      }}>
      {children}
    </Context.Provider>
  );
}

export function useAppContext() {
  return useContext(Context);
}
