import axios from "axios";

export const GET_DATA_USER = "GET_DATA_USER";
export const GET_A_USER = "GET_A_USER";
export const DELETE_USER = "DELETE_USER";
export const EDIT_USER = "EDIT_USER";
export const ADD_USER = "ADD_USER";
export const SEARCH_USER = "SEARCH_USER";
export const SORT_USER = "SORT_USER";

export const getUser = (data:object) => {
  return {
    type: GET_DATA_USER,
    payload: data,
  };
};
export const editUser = (data:object) => {
  return {
    type: EDIT_USER,
    payload: data,
  };
};
export const deleteUser = (data:number) => {
  return {
    type: DELETE_USER,
    payload: data,
  };
};
export const addUser = (data:object) => {
  return {
    type: ADD_USER,
    payload: data,
  };
};
export const getAUser = (id:number|string) => {
  return {
    type: GET_A_USER,
    payload: id,
  };
};
export const getUserThunk = () => async (dispatch:Function) => {
  try{
    const res = await axios.get<Function>("https://api.github.com/users/defunkt/repos");
    const data = res.data;
    dispatch(getUser(data));
  }catch(err){
    console.log(err);
    
  }
  
};
