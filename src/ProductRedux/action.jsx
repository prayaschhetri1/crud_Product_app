import * as types from "./actionType.jsx";
import axios from "axios";

export const getData = () => (dispatch) => {
  dispatch({ type: types.GET_PROD_REQUEST });
  axios.get("http://localhost:8080/prods")
    .then((res) =>{ 
    
        dispatch({ type: types.GET_PROD_SUCCESS, payload: res.data })
      
    }
    )
    .catch((err) => {
      dispatch({ type: types.GET_PROD_FAILURE });
    });
};


export const editData = (payload) => (dispatch) => {
    axios
      .post("http://localhost:8080/prods", 
        payload,
      )
      .then((res) => {
        dispatch({type:types.EDIT_PRODUCT,payload:res.data})
      })
}