import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import LockOutlinesIcon from '@material-ui/icons/LockOutlined'
import Input from './Input';

import useStyles from './Styles';

export const Auth = () => {
    const classes = useStyles();

    const [showPassword, setShowPassword] = useState(false);

    const isSignup = true;

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    const handleSubmit = () => {

    };

    const handlechange = () => {

    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinesIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <TextField name="firstName" label="First Name" handlechange={handlechange} autoFocus half />
                                    <TextField name="firstName" label="First Name" handlechange={handlechange} autoFocus half />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handlechange={handlechange} type="email" />
                        <Input name="password" label="Password" handlechange={handlechange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {
                            isSignup && (

                                <Input name="confirmPassword" label="Repeat Password" handlechange={handlechange} type="password" />

                            )
                        }
                    </Grid>
                    <Button type="submit" fillWidth variant="container" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                </form>
            </Paper>

        </Container>
    )
}


export default Auth