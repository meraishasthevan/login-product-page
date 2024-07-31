import React, { useContext } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';
import Button from '@mui/material/Button';
import { CartContext } from "./CartContext";

function Navbar(){
    const{quantity}=useContext(CartContext)
    return(
        <>
        <AppBar position="static">
         <Toolbar disableGutters>
           <IconButton color="inherit">
           <AdbIcon/>
           </IconButton>
           <Typography variant="h5" component="div" sx={{flexGrow:1}}>
               React Context
           </Typography>
           <Box>
             <Button color='inherit'>Home</Button>
             <Button color='inherit'>About</Button>
             <Button color='inherit'>Service</Button>
             <Button color='inherit'>Cart:{quantity}</Button>
           </Box>
         </Toolbar>
        </AppBar>
        </>
    );
}
export default Navbar;