import React  from 'react'
 import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../styles/SignIn.css'
import { Link } from 'react-router-dom';
import image100 from '../images/img1.jpg'


function Copyright(props) {
  return (
    <Typography variant="body2"  align="center" {...props}>
      {'Copyright © '}
      <Link to='/Home'>
        CrispyHuts
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {


  return (
    <div>
    <div className='imagecontainer_1'>
     <img style={{width:'700px'}}src={image100} alt='img'/>
      </div>
    <div className='box_container'>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Avatar sx={{ m: 1, bgcolor: '#7F56DA' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={SignIn} Validate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              type="email"
              label="Enter Email/MobileNumber"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              label="Password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="Remember me"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color='error'
              sx={{ mt: 3, mb: 2 ,bgcolor:'#7F56DA',width:400 }}><Link to='/Home1'>Sign In</Link>

            </Button>
            <Grid container>
              <Grid item xs>
                <Link to='/signup'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link variant="body2" to="/signup">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
       </Box>
        {/* </form> */}
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </div>
    </div>
  );
}