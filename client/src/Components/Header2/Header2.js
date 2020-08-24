import React, { Component } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import HeaderRight from '../HeaderRight/HeaderRight';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
   
    header2: {
        minHeight         : '80px',
        maxHeight         : '95px',
        backgroundColor   : '#f4efef',
        position          : 'fixed',
        
    },
    header_left : {
        display           : 'flex',
        alignItems        : 'center',
        justifyContent    : 'space-between',
        minHeight         : '80px'
    },
    header_right          : {
        display           : 'flex',
        justifyContent    : "flex-end",
        alignItems        : "center"
    },
 
}));

export default function Header2() {
    const classes = useStyles();
    
        return (
            <div>
                         
                 <AppBar className={classes.header2}>
                <Toolbar>
                    <Grid container spacing={0} >
                        <Grid item md={6} sm={10} xs={10} className={classes.header_left}>
                            <Typography>
                                VietLuxStay
                            </Typography>
                        </Grid>
                        <Grid item md={6} sm={2} xs={2} className={classes.header_right} >
                            <HeaderRight/>
                        </Grid>
                    </Grid>
               </Toolbar>          
            </AppBar>
              </div>
        )
    
}

