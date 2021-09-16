import React, { Component } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" data-test="component-navbar">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" data-test="component-navbar-brand">
              ColorPicker
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
