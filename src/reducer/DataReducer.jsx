const reducer =()=>{
    const initialState ={
    place : "Bangalore",
    sum : 0
    }
    
    const dataReducer =(state, action)=>{
    switch(action.type){
        case "ADD":
            return {
                ...state,
                sum : state.sum + action.payload
            }
    }
    }
    
    return {initialState, dataReducer}
    }
    
    export default reducer;