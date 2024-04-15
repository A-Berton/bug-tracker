import bugs from './bugs.json';
import { createContext, useContext, useState} from 'react';

export const GlobalContext = createContext([]);

export const GlobalContextProvider = ({children}) => {
    const initialData = bugs; 
    const [data, setData] = useState(initialData);

    const addBug = (newBug) => {
        setData([...data, newBug]);
    }

    const value = { data, addBug };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
      throw new Error('useGlobalContext must be used within a GlobalContextProvider');
    }
    return context;
  };