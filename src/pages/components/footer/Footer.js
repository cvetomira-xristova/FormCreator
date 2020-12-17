import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#5858AB",
    color: "#FFFFFF",
  },
  buttons: {
    flexDirection: "row-reverse",
  },
  list: {
    display: "flex",
    whiteSpace: "nowrap",
    margin: '0 10px'
  },
  button: {
    margin: "5px",
    padding: "5px",
    color: "#FFFFFF",
},
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid container item xs={6} >
        <List className={classes.list}>
          <ListItem>Contacts</ListItem>
          <ListItem>Help</ListItem>
          <ListItem>Terms of use</ListItem>
        </List>
      </Grid>
      <Grid container item xs={6}  className={classes.buttons}>
        <List className={classes.list}>
          <IconButton className={classes.button}>
            <FacebookIcon />
          </IconButton>
          <IconButton className={classes.button}>
            <TwitterIcon />
          </IconButton>
          <IconButton className={classes.button}>
            <InstagramIcon />
          </IconButton>
        </List>
      </Grid>
    </Grid>
  );
}
