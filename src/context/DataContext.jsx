import { createContext , useContext} from "react";
import reducer from "../reducer/DataReducer";
import { useReducer } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const {initialState, dataReducer} = reducer();
    const [state, dispatch] = useReducer(dataReducer, initialState);

  const name = "Bhavana";

  return (
    <DataContext.Provider 
    value={{ 
        name,
        state,
        dispatch
    }}>
    {children}
    </DataContext.Provider>
  );
};

export const useData =() => useContext(DataContext)