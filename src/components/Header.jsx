import React from "react";
import apiFacade from "../Facades/apiFacade";
import { Toolbar, Typography, AppBar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#060b26",
  },
}));

const Nav = (props) => {
  const logout = () => {
    apiFacade.logout();
  };

  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">
          <p>3 Sem Eksamen - Mathias Drejer</p>
        </Typography>
        <button onClick={logout}>Logout</button>

        {props.user && props.user.username}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
