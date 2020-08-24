import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Home from './Page/Home/Home';
import ShowProducts from './Page/ShowProducts/ShowProducts';
import Form from "./Page/Form/Form";
import PageUser from './Page/PageUser/PageUser';
import { CssBaseline } from '@material-ui/core';


export default function App(){
    return (
        
        <div>
           < CssBaseline/>
       <PageUser/>

       </div>
    
        
    )
}


