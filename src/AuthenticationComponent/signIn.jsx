import React, { useState, useEffect } from 'react';
import './signIn.css';
import { Card } from '@material-ui/core';
import { TextField, TextareaAutosize, Button } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { ArrowBack } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { loginApi } from '../Services/login-service';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },

}));


const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#17a2b8',
        },
        '& label': {
            fontFamily: "'IBM Plex Sans', sans-serif"
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#17a2b8',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#17a2b8',
            },
        },
    },
})(TextField);


const SignInPage = () => {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const history = useHistory();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [errorOpen, seterrorOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClickError = () => {
        seterrorOpen(true);
    };

    const backToHome = () => {
        history.push('/');
    }

    const isSituation = () => {
        setUserEmail('');
        setUserPassword('');
    }

    const handleCloseError = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        seterrorOpen(false);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const showAlert = (text) => {
        return (
            <div className={classes.root}>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} variant="filled" severity="success">
                        {text}
                    </Alert>
                </Snackbar>

            </div>
        )
    }

    const showErrorAlert = (text) => {
        return (
            <div className={classes.root}>
                <Snackbar open={errorOpen} autoHideDuration={6000} onClose={handleCloseError}>
                    <Alert onClose={handleCloseError} variant="filled" severity="error">
                        {text}
                    </Alert>
                </Snackbar>

            </div>
        )
    }

    const userLoggedIn = (email, password) => {
        loginApi(email, password, isSituation, showAlert, handleClick, handleClose,handleClickError,handleCloseError);
    }


    return (
        <div className="signIn-container">
            <Card className="signIn-card" variant="outlined">
                <p>Nnp Solutions</p>
                <h3>LogIn To Account</h3>
                <div className="signIn-form">
                    <div className="signIn-field">
                        <CssTextField
                            className={classes.margin, "field"}
                            label="enter email"
                            variant="outlined"
                            size="small"
                            type="email"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                        />
                    </div>
                    <div className="signIn-field">
                        <CssTextField
                            className={classes.margin, "field"}
                            label="enter password"
                            variant="outlined"
                            size="small"
                            type="password"
                            value={userPassword}
                            onChange={(e) => setUserPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="btn-container">
                    <Button size="large"
                        variant="contained"
                        className="signIn-btn"
                        disabled={userEmail.length == 0 || userPassword.length == 0 ? true : false}
                        onClick={() => userLoggedIn(userEmail, userPassword)}
                    >
                        SignIn
                </Button>
                    <p>Back to Home Screen <ArrowBack onClick={backToHome} className="arrow" /> </p>
                </div>
            </Card>
            <div>
                {showAlert('Login Successfully')}
                {showErrorAlert('something wrong')}
            </div>
        </div>
    )
}

export default SignInPage;