import { type } from '@testing-library/user-event/dist/type';
import * as types from './actionType';

const initialState = {
    isAuth:false,
    isLoading:false,
    token:""
}

export const authReducer = (state=initialState,action) => {
   const {type,payload} = action;
   switch(type){
     case types.LOGIN_REQUEST : {
        return {
            ...state,
            isLoading:true,
        }
     }
     case types.LOGIN_SUCCESS : {
        return {
            ...state,
            isLoading:false,
            isAuth:true,
            token:payload
        }
     }
     case types.LOGIN_FAILURE : {
        return {
            ...state,
            isLoading:false,
        }
     }

     default : {
        return state;
     }
   }
}