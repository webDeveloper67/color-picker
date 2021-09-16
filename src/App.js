import React, { Component } from "react";
import { Container, Grid, TextField, Box, Button } from "@material-ui/core";
import Values from "values.js";
import SingleColor from "./components/SingleColor";
import Navbar from "./screens/Navbar";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      color: "",
      error: false,
      colorList: [],
    };
  }
  onChange = (event) => {
    this.setState({ color: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    try {
      this.setState({ error: false });
      let colors = new Values(this.state.color).all(10);
      this.setState({ colorList: colors });
    } catch (error) {
      this.setState({ error: true, colorList: [] });
    }
  };

  render() {
    return (
      <div data-test="component-app">
        <Navbar data-test="component-navbar" />
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={10}>
              <form onSubmit={this.onSubmit} autoComplete="off">
                <TextField
                  error={this.state.error === true}
                  helperText={
                    this.state.error === true
                      ? "Please Enter Valid Color"
                      : false
                  }
                  type="text"
                  name="color"
                  id="color"
                  label="Enter color"
                  variant="outlined"
                  value={this.state.color}
                  onChange={(event) => this.onChange(event)}
                  data-test="onchange-count-state"
                  fullWidth
                />
                <Box my={5}>
                  <Button type="submit" color="primary" variant="contained">
                    Submit
                  </Button>
                </Box>
              </form>
            </Grid>
          </Grid>

          <Grid container data-test="container-component-single-color">
            {this.state.colorList.map((color, index) => {
              return (
                <Grid item xs={12} sm={12} md={2} key={index}>
                  <SingleColor
                    color={color}
                    index={index}
                    data-test="testing-testing"
                  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    );
  }
}
