import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from "./syrglogo.png"
import Image from 'react-image-resizer';
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { withStyles } from "@material-ui/core/styles";
import { AUTH_TOKEN } from '../constants'
import { InputBase } from '@material-ui/core';

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class SignIn extends Component{
  state = {
    login: true, // switch between Login and SignUp
    email: '',
    password: '',
    name: '',
  }
  render(){
    const { login, email, password, name } = this.state
    const {classes} = this.props;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.body}>
      <div className={classes.paper}>
          <img src={Logo} alt="Image" height="40" width="100"/>
        <Typography component="h1" variant="h4">
          Hey, manager.
        </Typography>
        <Typography component="h1" variant="h6">
          Sign in with your name.
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value = {email}
            onChange={e => this.setState({ email: e.target.value })}
            autoFocus
          />
          <Mutation mutation={LOGIN_MUTATION} variables={{ email, password, name }}>
            {loginMutation => (
               <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={loginMutation}
          >
            Sign In
          </Button>)}
            </Mutation>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      </div>
    </Container>
  );
}
_confirm = async data => {
  const { token } = this.state.login ? data.login : data.signup
  this._saveUserData(token)
  this.props.history.push(`/`)
}
  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}

export default withStyles(styles)(SignIn);

/// <Button
          //   type="submit"
          //   fullWidth
          //   variant="contained"
          //   color="primary"
          //   className={classes.submit}
          // >
          //   Sign In
          // </Button>

