import { Button } from "@material-ui/core";
import { Box, Grid } from "@mui/material";
import axios from "axios";
import React from "react";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const classes = useStyles();
  const navigate = useNavigate()

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/sessions",
        {
          user: {
            email: email,
            password: password,
            
          },
        },
        { withCredentials: true }
      )
      .then((response: any) => {
        if(response.data.status === "created"){
          navigate("/")
        }
      })
      .catch((error: any) => {
        console.log("login error", error);
      });
  };
  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };
  const handleChangeaPassword = (e: any) => {
    setPassword(e.target.value);
  };


  return (
    <Grid className={classes.root}>
      <Box className={classes.headerBox}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            className={classes.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChangeaPassword}
            className={classes.input}
          />
          <Button type="submit" className={classes.button}>Log In</Button>
          <Button href="/registration" className={classes.button}>Sign Up</Button>
        </form>
      </Box>
    </Grid>
  );
};
