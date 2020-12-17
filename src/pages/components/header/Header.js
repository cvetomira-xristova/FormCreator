import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import logo from "../../../static/logo/logo.svg";

const useStyles = makeStyles((theme) => ({
 root:{
   padding: '10px'
 },
  img: {
    width: "100px",
    height: "40px",
    margin: "5px",

  },
  buttons: {
    flexDirection: "row-reverse",
  },
  button: {
    margin: "5px",
    padding: "5px 60px",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid container item xs={6} spacing={1}>
        <a href="/" >
        <img src={logo} alt="Form Creator Logo" className={classes.img} />
        </a>
      </Grid>
      <Grid container item xs={6} spacing={1} className={classes.buttons}>
        <Button variant="contained" color="primary" className={classes.button}>
          Signup
        </Button>
        <Button variant="outlined" href='/login' color="primary" className={classes.button}>
          Login
        </Button>
      </Grid>
    </Grid>
  );
}
