import axios from "axios";

export const GET_DATA_USER = "GET_DATA_USER";
export const GET_A_USER = "GET_A_USER";
export const DELETE_USER = "DELETE_USER";
export const EDIT_USER = "EDIT_USER";
export const ADD_USER = "ADD_USER";
export const SEARCH_USER = "SEARCH_USER";
export const SORT_USER = "SORT_USER";

export const getUser = (data:any) => {
  return {
    type: GET_DATA_USER,
    payload: data,
  };
};
export const editUser = (data:any) => {
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
export const searchUser = (data:any) => {
  return {
    type: SEARCH_USER,
    payload: data,
  };
};
export const sortUser = (data:any) => {
  return {
    type: SORT_USER,
    payload: data,
  };
};
export const addUser = (data:any) => {
  return {
    type: ADD_USER,
    payload: data,
  };
};
export const getAUser = (id:any) => {
  return {
    type: GET_A_USER,
    payload: id,
  };
};
export const getUserThunk = () => async (dispatch:any) => {
  try{
    const res = await axios.get<any>("https://api.github.com/users/defunkt/repos");
    const data = res.data;
    dispatch(getUser(data));
  }catch(err){
    console.log(err);
    
  }
  
};
