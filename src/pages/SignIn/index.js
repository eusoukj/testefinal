import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { useNavigate } from 'react-router-dom';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useDispatch } from 'react-redux';

import { signIn } from '../../actions/accountActions';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
        backgroundImage:'url(/images/fundosigin.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        paddin: theme.spacing(2),
        textAlign: "center",
    },
    avatar: {
        background: theme.palette.primary.main,
        marginBottom: theme.spacing(1),
    },
    button: {
        marginTop: theme.spacing(1),
    },
    form: {
        margin: theme.spacing(2, 4),
    },

})); 

function Copyright() {
    return (
        <Typography variant="body2" align="center">
            {'Copyright © '}
            <a color="inherit" href="https://www.youtube.com/channel/UCkPzVMvNtpsuseVA7GWRz_Q">
            CRYPTO-EASY
            </a>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

function SignIn() {
    const classes = useStyles();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState();
    const dispatch = useDispatch();

    async function handleSignIn() {
       try {
        await dispatch(signIn(email, password));        
        navigate('/');
       } catch (error) {
        setErrorMessage(error.response.data.message)
       }
    }
    return (
        <Grid container className={classes.root}>
            <Grid 
            item 
            container 
            direction="column"
            justify="center"
            alignItems="center"
            md={8}
            className={classes.image}>
             <Typography style={{color: '#fff', fontSize: 35, lineHeight: '45px'}}>
             {/* <strong>CRYPTO EASY</strong> */}
             </Typography>
             <Typography variant="body2" style={{color: 'rgb(255,255,255, 0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px'}}>
            {/* A forma mais fácil de investir em Crypto Moedas. */}
             </Typography>
            </Grid>
            <Grid item md={4}>
                <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mt={8}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">Acesso</Typography>
                <form className={classes.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="E-mail"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        type="password"
                        id="password"
                        label="Senha"
                        name="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <Button 
                    className={classes.button}
                    color="primary"
                    fullWidth
                    variant="outlined"
                    onClick={handleSignIn}>
                    ENTRAR
                    </Button>
                    {
                        errorMessage &&
                        <FormHelperText error>
                            {errorMessage}
                        </FormHelperText>
                    }
                    <Grid container
                    justify="center">
                        <Grid item>
                        <Link>Esqueceu sua senha?</Link>
                        </Grid>
                        <Grid item>
                        <Link>Registre-se</Link>
                        </Grid>
                    </Grid>
                </form>
                <Copyright />
                </Box>
            </Grid>
        </Grid>
    
    )
};

export default SignIn;