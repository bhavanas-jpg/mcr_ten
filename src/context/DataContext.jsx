import { createContext , useContext, useEffect, useState} from "react";
import reducer from "../reducer/DataReducer";
import { useReducer } from "react";
import {inventory} from "../data/inventory_data"
export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const {initialState, dataReducer} = reducer();
    const [state, dispatch] = useReducer(dataReducer, initialState);
    const [inventoryData, setInventoryData] = useState(JSON.parse(localStorage.getItem("inventoryData")) || inventory)


    useEffect(()=>{
      localStorage.setItem("inventoryData", JSON.stringify(inventoryData));
  }, [inventoryData])


  return (
    <DataContext.Provider 
    value={{ 
  
        state,
        dispatch,
        inventoryData,
        setInventoryData
    }}>
    {children}
    </DataContext.Provider>
  );
};

export const useData =() => useContext(DataContext)