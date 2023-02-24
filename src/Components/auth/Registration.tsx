import { Button } from "@material-ui/core";
import { Box, Grid } from "@mui/material";
import axios from "axios";
import React from "react";
import useStyles from "./styles";

export const Registration = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirmation, setPasswordConfirmation] = React.useState("");
  const classes = useStyles();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/registrations",
        {
          user: {
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
          },
        },
        { withCredentials: true }
      )
      .then((response: any) => {
        // if(response.data.status === 'created') {
        console.log("registration res", response);
        // }
      })
      .catch((error: any) => {
        console.log("registration error", error);
      });
  };
  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };
  const handleChangeaPassword = (e: any) => {
    setPassword(e.target.value);
  };
  const handleChangeaPasswordConfirmation = (e: any) => {
    setPasswordConfirmation(e.target.value);
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
          <input
            type="password"
            name="password_confirmation"
            placeholder="Password Confirmation"
            value={passwordConfirmation}
            onChange={handleChangeaPasswordConfirmation}
            className={classes.input}
          />
          <Button type="submit" className={classes.button}>Submit</Button>
        </form>
      </Box>
    </Grid>
  );
};
