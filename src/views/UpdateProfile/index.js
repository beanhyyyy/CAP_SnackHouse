import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { useHistory } from "react-router-dom"


import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { Alert, AlertTitle } from '@material-ui/lab';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/report")
      })
      .catch(() => {
        setError("Failed to update account")
        var errorMessage = error.message;
        // setErrorCode("Error Code : \n" + errorCode)
        setErrorMessage("Description Error : \n" + errorMessage)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const classes = useStyles();

  return (
    <>
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cập nhật lại mật khẩu
        </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            {error &&
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {error} — <strong>check it out!</strong>
                {/* <br /> */}
                {/* {errorCode} */}
                <br />
                {errorMessage}
              </Alert>
            }
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Tài khoản công ty"
              name="email"
              inputRef={emailRef}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật khẩu"
              type="password"
              id="password"
              inputRef={passwordRef}
            />
            <TextField
                variant="outlined"
                required
                fullWidth
                margin="normal"
                name="password"
                label="Nhập lại mật khẩu"
                type="password"
                id="password-confirm"
                inputRef={passwordConfirmRef}
              />
            {/* <TextField
                variant="outlined"
                required
                fullWidth
                margin="normal"
                label="Tên nhân viên"
                inputRef={passwordConfirmRef}
              />
            <TextField
                variant="outlined"
                required
                fullWidth
                margin="normal"
                label="Ngày sinh"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                inputRef={passwordConfirmRef}
              />
            <TextField
                variant="outlined"
                required
                fullWidth
                margin="normal"
                label="Chi nhánh làm việc"
                inputRef={passwordConfirmRef}
              /> */}
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive information via email."
              />
            </Grid> */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className={classes.submit}
              disabled={loading}
            >
              Đồng ý
              </Button>
            {/* <Grid container justify="flex-end">
              <Grid item>
                <Link to="/Login" href="#" variant="body2">
                  Quay về trang Login
              </Link>
              </Grid>
            </Grid> */}
          </form>
        </div>
        <Box mt={5}>
          {/* <Copyright /> */}
        </Box>
      </Container>
    </>
  )
}
