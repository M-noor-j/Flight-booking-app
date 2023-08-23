import React from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
// import { HashRouter, Routes, Switch, Redirect ,Router,Route ,BrowserRouter} from 'react-router-dom';
import AdminLayout from "layouts/admin";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <ThemeEditorProvider>
      <Router>
        <Route path={`/admin`} component={AdminLayout} />
        <Redirect from="/" to="/admin" />
      </Router>
    </ThemeEditorProvider>
  </ChakraProvider>,
  document.getElementById("root")
);
