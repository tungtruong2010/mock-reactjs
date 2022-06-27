import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Toolbar, Typography } from "@mui/material";
import { Link, Route, useNavigate, BrowserRouter} from "react-router-dom";
export default function Header(){

    return (
    <Box sx={{ flexGrow: 1 }}>
       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{padding:30}}>
            USER LIST
            <Link
              to="/respo1"
              style={{marginRight:20, marginLeft:20}}
            >
              REPOS1
            </Link>
            <Link
              to="/respo2"
            >
              REPOS2
            </Link>
        </Typography>
    </Box>
    )
}