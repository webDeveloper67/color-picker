// index.test.js
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import App from "./App";

jest.mock("react-dom", () => ({ render: jest.fn() }));

test("renders with App and root div", () => {
  const root = document.createElement("div");
  root.id = "root";
  document.body.appendChild(root);

  require("./index.js");
  expect(ReactDOM.render).toHaveBeenCalledWith(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
    root
  );
});
