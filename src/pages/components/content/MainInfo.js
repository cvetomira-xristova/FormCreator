import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "50px 120px",
    margin: "10px 0",
  },
  img: {
    height: "470px",
    width: "600px",
  },
  rightContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  button: {
    color: "#000000",
    backgroundColor: "#FFD759",
    width: "35%",
  },
}));

export default function MainInfo({
  bgColor,
  textColor,
  illustration,
  title,
  subtitle,
  button,
  direction
}) {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      style={{ backgroundColor: bgColor, flexDirection: direction }}
    >
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
        <Typography variant="h3" gutterBottom style={{ color: textColor }}>
          {title}
        </Typography>
        <Typography variant="h5" gutterBottom style={{ color: textColor }}>
          {subtitle}
        </Typography>
        {button && (
          <Button variant="contained" className={classes.button}>
            Try Now
          </Button>
        )}
      </Grid>
    </Grid>
  );
}
