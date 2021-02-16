
import Header from './components/Header'
import Footer from './components/Footer'
import Categories from './components/Categories'
import Status from './components/Products'
import React from 'react';
import ReactDOM from 'react-dom';
import {AppBar,Typography,Toolbar} from '@material-ui/core/';



function App() {
  return (
    <>
   <AppBar position="static">
  <Toolbar>
    <Typography variant="h6" >
     Our Store
    </Typography>
   
  </Toolbar>
</AppBar>

   

   <Header/>
   <Categories/>
   <Status/>
   <Footer/>


</>
  );
}

export default App;

