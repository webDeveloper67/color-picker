import React, { Component } from "react";
import PropTypes from "prop-types";
import { Box, Card, Typography } from "@material-ui/core";
import utils from "./utils";

export default class SingleColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: false,
    };
  }

  handleCopyColor = (hexVal) => {
    this.setState({ alert: true });
    navigator.clipboard.writeText(hexVal);
  };

  componentDidUpdate() {
    const timeout = setTimeout(() => {
      this.setState({ alert: true });
    }, 2000);
    return () => clearTimeout(timeout);
  }

  bcgColors() {
    let bcg = this.props.color.rgb.join(",");
    return bcg;
  }

  hexColors() {
    const { rgb } = this.props.color;
    let hex = utils.rgbToHex(...rgb);
    return hex;
  }
  render() {
    const { index } = this.props;
    // const { rgb, weight } = this.props.color || {};
    const { weight } = this.props.color;

    return (
      <Card
        style={{
          backgroundColor: `rgb(${this.bcgColors()})`,
          height: "100%",
          cursor: "pointer",
        }}
        square={true}
        onClick={() => this.handleCopyColor(this.hexColors())}
        data-test="component-single-color"
      >
        <Box p={3}>
          <Typography color={index > 10 ? "textPrimary" : "textSecondary"}>
            {weight}%
          </Typography>
          <Typography color={index > 10 ? "textPrimary" : "textSecondary"}>
            {this.hexColors()}
          </Typography>
          {this.state.alert && (
            <Typography
              variant="caption"
              display="block"
              color={index > 10 ? "textPrimary" : "textSecondary"}
              data-test="copy-to-clipboard"
            >
              copied to clipboard
            </Typography>
          )}
        </Box>
      </Card>
    );
  }
}

SingleColor.propTypes = {
  color: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
