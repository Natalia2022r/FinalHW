import { Component } from "react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { Nav } from "../../style";

export default class Navigation extends Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1, width: "100%" }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <h2>CURSOR.EDUCATION</h2>
            </Typography>
            <Nav>
              <li>
                <NavLink to="/">USER</NavLink>
              </li>
              <li>
                <NavLink to="/addusers">ADD_USER</NavLink>
              </li>
              <li>
                <NavLink to="/post">POST</NavLink>
              </li>
              <li>
                <NavLink to="/addpost">ADD_POST</NavLink>
              </li>
            </Nav>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
