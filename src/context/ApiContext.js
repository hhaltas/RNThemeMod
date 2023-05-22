import {createContext, useState, useEffect, useContext} from 'react';
import {APIURL} from '../static';

const ApiContext = createContext();
export function ApiProvider({children}) {
  const [mod1, setMod1] = useState('light');

  const values = {
    mod1,
    setMod1,
  };
  return <ApiContext.Provider value={values}>{children}</ApiContext.Provider>;
}
export default ApiContext;

export function useAPI() {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error('Context must be used within a Provider');
  }
  return context;
}
