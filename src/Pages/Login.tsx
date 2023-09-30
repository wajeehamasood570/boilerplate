import { Box, Button, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { fbLogin } from '../config/firebasemethods';

const Login = () => {

  const [model, setModel] = useState<any>({});
  const navigate = useNavigate();

  const fillModel = (key: any, val: any) => {
    model[key] = val;
    setModel({ ...model })
  }


  const loginUser = () => {
    console.log(model);
    fbLogin(model).then((
      (res:any) => { 
        console.log(res);
        if(res.role == "user"){
          navigate("/student") 
        }
        else{
          navigate("/admin") }
        }
    )).catch((err) => {
      console.log(err)
    })
  }


  // const loginUser = () => {
  //   console.log(model);
  //   navigate(`/profile/${model.email}`,{state:model});
  // }
  return (
    <>
      <Box
        sx={{ height: "100vh" }}
        className="d-flex bg-secondary justify-content-center align-items-center">
        <Paper className="p-3">
          <h4>Login</h4>
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

          <Box>
              if you aren't login please <Link to="/signup">Signup</Link>
            </Box>

          <Button variant="contained"
            onClick={() => loginUser()}>Login</Button>

        </Paper>

      </Box>


    </>
  )
}

export default Login