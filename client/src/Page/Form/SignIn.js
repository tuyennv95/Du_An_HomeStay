import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, InputBase, InputAdornment, TextField, Button, Link, IconButton } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import './styles.css';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FacebookIcon from '@material-ui/icons/Facebook';

import HttpsIcon from '@material-ui/icons/Https';

const useStyles = makeStyles((theme) => ({
    sign_in: {
        width: '85%',
        paddingTop: '30px',
        margin: 'auto',
    },
    input_group: {
        width: '100%',
    },
    sign_in_name_form: {
        fontSize: '24px',
        fontWeight: 900,

        lineHeight: '30px',
        color: '#000000',
    },
    name_input: {
        fontSize: '16px',
        fontWeight: 700,
        lineHeight: '24px',
        color: '#222222',
        paddingTop: '20px',
        paddingBottom: '10px',
    },
    input: {
        border: '1px solid #d6d1d1',
        borderRadius: '30px',
        paddingLeft: '20px',
        paddingRight: '10px',
        width: '100%',
        height: '48px',
        marginTop: '30px'
    },
    // ------------------------------------------------------------
    input_phone_code_nation: {
        width: '120px',
        height: '48px',
        // borderRadius:'25px!important',
        // border:'1px solid rimport { Button } from '@material-ui/core/Button';
    },
    input2: {
        border: '1px solid #d6d1d1',
        borderRadius: '30px',
        paddingLeft: '20px',
        paddingRight: '10px',
        width: 'calc(100% - 145px)',
        height: '48px',
    },

    button_sign_in: {
        width: '100%',
        backgroundImage: 'linear-gradient(90deg,#f65e38 0,#f68a39 51%,#f65e38)',
        backgroundSize: '200% auto',
        marginTop: '25px',
        height: '48px',
        borderRadius: '30px',
        '&:hover': {
            backgroundPositionX: '100%',
            backgroundPositionY: 'center',
        }
    },
    button_add_mxh:{
        width:'100%',
        height:'48px',
        borderRadius:'30px',
        border:'1px solid gray',
        fontSize:'14px',
        marginTop:'20px',
        pointerEvents:'relative'
    },
    icon_button_mxh:{
        position: 'absolute',
        right:0,
    },
    icon_button_mxh2:{
        position: 'absolute',
        right:3,
    }




}));
function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== 'undefined'
        ? isoCode
            .toUpperCase()
            .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
        : isoCode;
}
export default function SignIn() {
    const classes = useStyles();
    return (
        <div className={classes.sign_in}>
            <Typography className={classes.sign_in_name_form}>
                Đăng nhập
                </Typography>
            {/* -------------------------------------------------------- */}
            <div className={classes.input_group}>
                <Typography className={classes.name_input}>
                    Đăng nhập Luxstay để trải nghiệm

                    </Typography>
                <InputBase
                    className={classes.input}
                    inputProps={{ 'aria-label': 'input email' }}
                    endAdornment={
                        <InputAdornment position='start'>
                            <MailOutlineIcon style={{ color: 'gray' }} />
                        </InputAdornment>
                    }
                />
                <InputBase
                    className={classes.input}
                    inputProps={{ 'aria-label': 'input pass' }}
                    endAdornment={
                        <InputAdornment position='start'>
                            <HttpsIcon style={{ color: 'gray' }} />
                        </InputAdornment>
                    }
                />

            </div>

            {/* ----------------------------------------------------------
             */}
            <Button className={classes.button_sign_in}>
                Đăng nhập
            </Button>
            {/* ----------------------------------------------------------
             */}
            <Typography style={{ textAlign: "center", paddingTop: '30px' }}>
                Quên mật khẩu? <Link href="#" color="secondary">Nhấn vào đây</Link>
            </Typography>
            {/* ----------------------------------------------------------
             */}
            <Typography style={{ textAlign: "center", paddingTop: '30px' }}>
                Bạn chưa có tài khoản Luxstay?  <Link href="#" color="secondary">Đăng ký</Link>
            </Typography>
            {/* ----------------------------------------------------------
             */}
            <Typography style={{ textAlign: "center", paddingTop: '30px' }}>
                Hoặc
            </Typography>
            {/* ----------------------------------------------------------
             */}
            <Button className={classes.button_add_mxh}
            >

                <Typography style={{ fontSize: '14px' }}>
                    Đăng nhập với FaceBook
            </Typography>
                <IconButton className={classes.icon_button_mxh}>
                    <FacebookIcon />
                </IconButton>
            </Button>
            {/* ----------------------------------------------------------
             */}
            <Button className={classes.button_add_mxh}
            >

                <Typography style={{ fontSize: '14px' }}>
                    Đăng nhập với Google
            </Typography>
                <IconButton className={classes.icon_button_mxh2}>
                    <i style={{ fontSize: '20px' }} className="fa fa-google" aria-hidden="true"></i>
                </IconButton>
            </Button>
        </div>
    )

}

