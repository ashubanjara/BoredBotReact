import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Field, reduxForm } from 'redux-form';
import {useHistory, Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkLogin } from './actions'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
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

// Validation

const validate = values => {
  const errors = {}
  const accounts = {
    'Ashu': 'XHyO3JaU',
    'Gayathri': 'XHyO3JaU',
    'Admin': 'password'
  }

  if (!accounts[values.username]){
    errors.username = "Invalid Username"
  }
  
  if (accounts[values.username] !== values.password){
    errors.password = "Invalid Password"
  }

  return errors
}


// SignIn Component

let SignIn = (props) => {

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  // Form items

    const renderTextField = ({
      label,
      input,
      meta: { touched, invalid, error },
      ...custom
    }) => (
      <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="username"
        name="username"
        autoComplete="off"
        autoFocus
      />
    )

    const renderPasswordField = ({
      label,
      input,
      meta: { touched, invalid, error },
      ...custom
    }) => (
      <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        type="password"
        id="password"
        autoComplete="off"
      />
    )

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={props.handleSubmit(() => 
          {
            dispatch(checkLogin())
            history.push("/")
          })}>
          <Field name="username" component={renderTextField}>
          </Field>
          <Field name="password" component={renderPasswordField}>
          </Field>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Link to="/">
            Back to Homepage
          </Link>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

SignIn = reduxForm({
  // a unique name for the form
  form: 'signIn',
  validate
})(SignIn)

export default SignIn