import { createContext , useContext, useEffect, useState} from "react";
import reducer from "../reducer/DataReducer";
import { useReducer } from "react";
import {inventory} from "../data/inventory_data"
export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const {initialState, dataReducer} = reducer();
    const [state, dispatch] = useReducer(dataReducer, initialState);
    const [inventoryData, setInventoryData] = useState(JSON.parse(localStorage.getItem("inventoryData")) || state.data);
    const [filterContainer, setFilterContainer] = useState(true);


    useEffect(()=>{
      localStorage.setItem("inventoryData", JSON.stringify(state.data));
  }, [state.data])

      
  console.log(state.departments);



  return (
    <DataContext.Provider 
    value={{ 
  
        state,
        dispatch,
        inventoryData,
        setInventoryData,
        filterContainer, 
        setFilterContainer
    }}>
    {children}
    </DataContext.Provider>
  );
};

export const useData =() => useContext(DataContext)