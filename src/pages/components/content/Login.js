import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "50px 120px",
    margin: "10px 0",
  },
  paper: {
    backgroundColor: "#5858AB",
    padding: '20px'
  },
  img: {
    height: "419px",
    width: "600px",
  },
  rightContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  fieldsContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "50px",
  },
  button: {
    margin: "20px 0 0 0",
    backgroundColor: "#FFFFFF",
    '&:hover':{
        backgroundColor: '#CCCCCC',
    },
  },
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },
})(TextField);

export default function Login({ illustration }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid container item xs={7} spacing={1} className={classes.leftContainer}>
        <img
          src={illustration}
          alt="Form Creator Logo"
          className={classes.img}
        />
      </Grid>
      <Grid
        container
        item
        xs={5}
        spacing={1}
        className={classes.rightContainer}
      >
        <Paper className={classes.paper}>
          <Typography
            variant="h4"
            gutterBottom
            color="secondary"
            align="center"
          >
            Login
          </Typography>
          <Grid container className={classes.fieldsContainer}>
            <CssTextField label="Email" />
            <CssTextField label="Password" />
            <Typography
              variant="subtitle1"
              gutterBottom
              color="secondary"
              align="right"
            >
              Forgot Password?
            </Typography>
            <Button className={classes.button}>Login</Button>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
