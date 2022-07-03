import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import style from '../global.module.css';
import { addUser } from "../redux/action/userAction";
import React from "react";
import { Iprops } from "./FormEdit";
export default function FormAdd({open, setOpens}:Iprops) {
  const dispatch = useDispatch();
  let navigate = useNavigate();

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
    console.log({
      ...dataAdd, id: uuid()
    });
    setDataAdd({
      id: "",
      name: "",
      description: "",
      language: "",
      watchers_count: "",
      open_issues: "",
      private:"",
    })
    navigate("/home");
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
  const handleSaveAdd = () => {
    let idR = Math.round(Math.random())*100 ;
    dispatch(addUser({...dataAdd, id: idR}))
    clear();
    setOpens(false);
  }
  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Form Add
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
       /> <br></br>
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
          <Button onClick={handleSaveAdd}>Add</Button>
        </DialogActions>
      </Dialog>
  );
  // return (
  //   <>
  //     <TextField
  //       id="outlined-basic"
  //       label="Name"
  //       name="name"
  //       variant="filled"
  //       color="primary"
  //       value={dataAdd.name}
  //       onChange={(e)=>{setDataAdd({
  //         ...dataAdd,
  //         name: e.target.value
  //       })}}
  //     /><br></br>
  //     <TextField
  //       id="outlined-basic"
  //       label="Description"
  //       name="description"
  //       variant="filled"
  //       color="primary"
  //       value={dataAdd.description}
  //       onChange={(e)=>{setDataAdd({
  //         ...dataAdd,
  //         description: e.target.value
  //       })}}
  //     /><br></br>
  //     <TextField
  //       id="outlined-basic"
  //       label="Language"
  //       variant="filled"
  //       color="primary"
  //       value={dataAdd.language}
  //       onChange={(e)=>{setDataAdd({
  //         ...dataAdd,
  //         language: e.target.value
  //       })}}
  //     /><br></br>
  //     <TextField
  //       id="outlined-basic"
  //       label="Visibility"
  //       variant="filled"
  //       color="primary"
  //       value={dataAdd.visibility}
  //       onChange={(e)=>{setDataAdd({
  //         ...dataAdd,
  //         visibility: e.target.value
  //       })}}
  //     /><br></br>
  //     <TextField
  //       id="outlined-basic"
  //       label="Size"
  //       variant="filled"
  //       color="primary"
  //       value={dataAdd.size}
  //       onChange={(e)=>{setDataAdd({
  //         ...dataAdd,
  //         size: e.target.value
  //       })}}
  //     />
  //     <Button onClick={add} variant="contained" color="success">
  //       ADD
  //     </Button>
  //     <Button onClick={clear} variant="contained" color="warning">
  //       Clear
  //     </Button>
  //     <Button onClick={backToHome} color="secondary">
  //       Cancel
  //     </Button>
  //   </>
  // );
}
