import { Box, Button, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { fbSigup } from '../config/firebasemethods';

const Signup = () => {

  const [model, setModel] = useState<any>({});
  const navigate = useNavigate();

  const fillModel = (key: any, val: any) => {
    model[key] = val;
    setModel({ ...model })
  }



  const signupuser = () => {
    model.role = "user";
    console.log(model);
    fbSigup(model).then((
        res => {navigate("/login")}
    )).catch((err)=>{
        console.log(err)
    })
}



//   const signupUser = () => {
//     console.log(model);
//     navigate(`/login`);
//   }
  return ( 
    <>
      <Box
        sx={{ height: "100vh" }}
        className="d-flex bg-secondary justify-content-center align-items-center">
        <Paper className="p-4">
          <h4>SignUp</h4>

          <Box className="p-3">
            <TextField
              onChange={(e) => fillModel("username", e.target.value)}
              variant='standard'
              type='username'
              label="username"
            />
          </Box>


          <Box className="p-3">
            <TextField
              onChange={(e) => fillModel("email", e.target.value)}
              variant='standard'
              type='email'
              label="email"
            />
          </Box>

          <Box className="p-3">
            <TextField
              onChange={(e) => fillModel("password", e.target.value)}
              variant='standard'
              type='password'
              label="password"
            />
          </Box>

          <Box className="p-3">
            <TextField
              onChange={(e) => fillModel("fullname", e.target.value)}
              variant='standard'
              type='fullname'
              label="fullname"
            />
          </Box>

          
            <Button variant="contained" 
            onClick={()=>signupuser()}>Sign Up</Button>
         
        </Paper>
      </Box>
    </>
  )
}

export default Signup