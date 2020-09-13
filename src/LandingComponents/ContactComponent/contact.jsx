import React from 'react';
import './contact.css';
import { TextField, TextareaAutosize, Button } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
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

const ContactUsPage = () => {
    const classes = useStyles();
    return (
        <div id="contact" className="contact-container">
            <h1>Contact Me !</h1>
            <div className="contact-field">
                <CssTextField
                    className={classes.margin, "name-field"}
                    label="first name"
                    variant="outlined"
                    size="small"
                />
                <CssTextField
                    className={classes.margin, "name-field"}
                    label="last name"
                    variant="outlined"
                    size="small"
                />
            </div>
            <div className="contact-field">
                <CssTextField
                    className={classes.margin, "email-field"}
                    label="email address"
                    variant="outlined"
                    size="small"
                />
            </div>
            <div className="contact-field">
                <TextareaAutosize
                    className="text-area"
                    rowsMin={4}
                    rowsMax={4}
                    placeholder="write your message" />
            </div>
            <div className="submit-container">
                <Button className="submit-btn" size="small" variant="contained">Submit</Button>
            </div>
        </div>
    )
}

export default ContactUsPage;