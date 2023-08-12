import { inventory } from "../data/inventory_data";

const reducer =()=>{
    const initialState ={
     departments: "",
     data: (()=>JSON.parse(localStorage.getItem("inventoryData")) ||  inventory)
     ()
    }


    const dataReducer =(state, action)=>{
    switch(action.type){
        case "DEPT_FILTER":
            console.log(action.payload)
            return{
             ...state,
             departments: action.payload
            };
            case "ADD_PRODUCT": 
            return{
                ...state,
                data: [...state.data, action.payload]
            }
            default:
         return state;
      
    }
    }
    
    return {initialState, dataReducer}
    }
    
    export default reducer;


    /**
     * const reducer = () => {
  const initialState = {
    departments: []
  }

  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case "DEPT_FILTER":
        return {
          ...state,
          departments: [...state.departments, action.payload]
        };
      default:
        return state;
    }
  }

  // Rest of your reducer logic...

  return dataReducer; // Return the reducer function
}

export default reducer;
     */
 