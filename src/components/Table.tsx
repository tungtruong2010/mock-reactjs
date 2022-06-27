import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Container, Toolbar } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAUser, getUserThunk } from "../redux/action/userAction";
import FormAdd from './FormAdd';
import FormEdit from './FormEdit';

export default function MainTable() {
  const dispatch = useDispatch();
  const userList = useSelector((state:any) => state.User.userList);
  console.log(userList)
  useEffect(() => {
    if(!userList.length){
      dispatch<any>(getUserThunk())
    }
    
  }, []);

  const handleDelete = (id: number) => {
    dispatch(deleteUser(id));
  };

  const [open, setOpen] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);
  const handleClickOpenEdit = (id:number) => {
    setOpen(true);
    dispatch(getAUser(id));
  };

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  }
  return (
       <Container maxWidth="xl">
      <Toolbar style={{paddingLeft: 0}}>
        <Button onClick={handleClickOpenAdd} variant="contained" color="primary" >
          Add new user
        </Button>
      </Toolbar>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Language</TableCell>
            <TableCell align="center">Watchers</TableCell>
            <TableCell align="center">Open Issues</TableCell>
            <TableCell align="center">Private</TableCell>
            <TableCell>Menu</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map((data: any) => (
            <TableRow
              key={data.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{borderBottom: "unset"}}>
                {data.id}
              </TableCell>
              <TableCell component="th" scope="row" style={{borderBottom: "unset"}}>
                {data?.name}
              </TableCell>
              <TableCell align="center" style={{borderBottom: "unset"}}>{data.description}</TableCell>
              <TableCell align="center" style={{borderBottom: "unset"}}>{data.language}</TableCell>
              <TableCell align="center" style={{borderBottom: "unset"}}>{data.watchers_count}</TableCell>
              <TableCell align="center" style={{borderBottom: "unset"}}>{data.open_issues}</TableCell>
              <TableCell align="center" style={{borderBottom: "unset"}}>{data.private.toString()}</TableCell>
              <TableCell align="center" style={{display:"flex", marginRight:"2", borderBottom:"unset"}}>
                <Button onClick={() => {handleClickOpenEdit(data.id)}} variant="contained" color="warning" style={{marginRight:25}}>
                <EditIcon />
                </Button>
                <Button
                  onClick={() => handleDelete(data.id)}
                  variant="contained"
                  color="error"
                >
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <FormEdit open={open} setOpens={setOpen}></FormEdit>  
    <FormAdd open={openAdd} setOpens={setOpenAdd}></FormAdd>
    </Container>
   
  );
}
