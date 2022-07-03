import * as types from './actionType.jsx';

const initialState = {
    prods:[],
    isLoading:false,
    isError: false
}

export const productReducer = (state=initialState,action) => {
    
    const {payload,type} = action;
    switch(type){
        case types.GET_PROD_REQUEST : {
            return {
                ...state,
                isLoading:true,
            }
        }
        case types.GET_PROD_SUCCESS : {
            
            return {
                ...state,
                prods:payload,
                isLoading:false,
                
            }
        }

        case types.GET_PROD_FAILURE : {
            return {
                ...state,
                isLoading:false,
                isError:true,
            }
        }

        case types.EDIT_PRODUCT : {
           const newProd = state.prods.filter((item) => {
             return item.id !== payload.id;
           })
            return {
                
               prod: {prods:newProd},...state
               
            }
        }

        default : {
            return state;
        }
    }
}