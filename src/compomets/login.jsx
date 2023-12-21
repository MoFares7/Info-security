
import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography , Link } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const Login=()=>{

    const textStyle={padding:5}
    const avatarStyle={backgroundColor:'#6200ffc7'}
    const btnstyle={margin:'8px 0', backgroundColor: "#6200ffc7"}
    return(
      <div>
          <Grid align='center'>
                     <Avatar style={avatarStyle}>
                     </Avatar>
                    <h3>Sign In</h3>
                </Grid>
                <TextField style={textStyle} label='Username' placeholder='Enter username' variant="outlined" fullWidth required />
                <TextField style={textStyle} label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth required/>
            
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>

                <Typography >
                     Do you have an account ?
                     <Link href="/signUp" >
                        Sign Up 
                </Link>
                </Typography>
                </div>
    )
}

export default Login;
