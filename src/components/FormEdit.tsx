import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser, getAUser } from "../redux/action/userAction";
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from "react-router-dom";
import { FormData } from "../types/FormData";
import style from '../global.module.css'
export interface Iprops{
  open:boolean,
  setOpens: any
}
export default function FormEdit({open, setOpens}:Iprops) {
  const dispatch = useDispatch()
  let { id } = useParams();  
  const dataEdit = useSelector((state:any) => state.User.getUser);

  useEffect(()=>{
    
    setDataAdd({
      id: dataEdit.id,
      name: dataEdit.name,
      description: dataEdit.description,
      language: dataEdit.language,
      watchers_count: dataEdit.watchers_count,
      open_issues: dataEdit.open_issues,
      private: dataEdit.private
    })
  },[dataEdit]);
 
  const [dataAdd, setDataAdd] = useState({
    id: "",
    name: "",
    description: "",
    language: "",
    watchers_count: "",
    open_issues: "",
    private:"",
  })
  
  const add = () => {
    dispatch(addUser({...dataAdd, id: uuid()}))
  };
  const clear = () =>{
    setDataAdd({
      id: "",
      name: "",
      description: "",
      language: "",
      watchers_count: "",
      open_issues: "",
      private:"",
    })
  }
  const handleClose = () => {
    setOpens(false);
  };
  const handleSave = () => {
    dispatch(editUser(dataAdd))
    setOpens(false);
  }
  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Form Edit
          </DialogContentText>

       <TextField
         id="outlined-basic"
         className={style.textField}
         label="Name"
         name="name"
         variant="filled"
         color="primary"
         value={dataAdd.name}
         onChange={(e)=>{setDataAdd({
           ...dataAdd,
           name: e.target.value
         })}}
       /><br></br>
       <TextField
         id="outlined-basic"
         className={style.textField}
         label="Description"
         name="description"
         variant="filled"
         color="primary"
         value={dataAdd.description}
         onChange={(e)=>{setDataAdd({
           ...dataAdd,
           description: e.target.value
         })}}
       /><br></br>
       <TextField
         id="outlined-basic"
         className={style.textField}
         label="Language"
         variant="filled"
         color="primary"
         value={dataAdd.language}
         onChange={(e)=>{setDataAdd({
           ...dataAdd,
           language: e.target.value
         })}}
       /><br></br>
       <TextField
         id="outlined-basic"
         className={style.textField}
         label="Watchers"
         variant="filled"
         color="primary"
         value={dataAdd.watchers_count}
         onChange={(e)=>{setDataAdd({
           ...dataAdd,
           watchers_count: e.target.value
         })}}
       /><br></br>
       <TextField
         id="outlined-basic"
         className={style.textField}
         label="Open Issues"
         variant="filled"
         color="primary"
         value={dataAdd.open_issues}
         onChange={(e)=>{setDataAdd({
           ...dataAdd,
           open_issues: e.target.value
         });
         }}
       /><br></br>
       <InputLabel id="private">Private</InputLabel>
               <Select
                 labelId="private"
                 id="select-private"
                 className={style.textField}
                 value={dataAdd.private}
                 label="Private"
                 name="private"
                 onChange={(e)=>{
                   setDataAdd({
                   ...dataAdd,
                   private: e.target.value
                 });console.log("private",  dataAdd.private)}}
                 inputProps={{ 'data-testid': 'private' }}
               >
                 <MenuItem value="">Select private...</MenuItem>
                 <MenuItem value="true">True</MenuItem>
                 <MenuItem value="false">False</MenuItem>
               </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
  );
  
}
