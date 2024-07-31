
import './App.css';
import Login from './Login.js';
import Home from './Home.js';
import About from './About.js';
import Product from './Product.js';
import Form from './Form.js';
import Dashboard from './Dashboard.js'
import {Route,Routes} from 'react-router-dom';
// import Crud from "./Crud";

// import  React, { useState } from 'react';
/*import Data from './Data.json';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Cart from './Cart.js';
import Navbar from './Navbar.js';
import { CartContext } from './CartContext.js';
import LoginCont from './LoginCont.js';
import Profile from './Profile.js';
import { LoginContext } from './LoginContext.js';*/
function App() {

  // const[username,setUserName]=useState("")
  // const[showProfile,setShowProfile]=useState(false)



  // const[quantity,setQuantity]=useState(1)
  return (
   <div>
       <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
      {/* <Crud/> */}
  </div>
    /*<>
    <Container maxWidth="lg">
      <Grid container spacing={5} style={{marginTop:"20px"}}>
        {
     Data.map((result)=>(

      <Card sx={{ maxWidth: 345 }} style={{marginTop:"25px",marginLeft:"44px",borderRadius:"8px",width:"35%"} } >
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <img src={result.img} style={{width:"100%",height:"350px"}}/>
        </Typography>

        <Typography > <span>{result.title}</span> </Typography><br/>
        <Typography>
          <p>{result.des}</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  ))
}  
  </Grid></Container>
    </>*/
 /* <div>
      <CartContext.Provider value={{quantity,setQuantity}}>
       <Navbar/>
       <Cart/>
       </CartContext.Provider>
    </div>*/
  //  <LoginContext.Provider value={{username,setUserName,showProfile,setShowProfile}}>
      // {showProfile? <Profile/>:<LoginCont/>}
    // </LoginContext.Provider>
 
  );
}

export default App;
