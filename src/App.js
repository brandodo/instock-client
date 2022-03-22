import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/HeroFooter/HeroFooter";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Footer />
      </BrowserRouter>
    );
  }
}
