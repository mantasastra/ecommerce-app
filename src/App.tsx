import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "emotion-theming";
import theme from "./Theme/theme";
import { auth } from "./firebase/firebase.utils";

import Header from "./components/header/Header";
import HomePage from "./pages/homePage/HomePage";
import ShopPage from "./pages/shop/Shop";
import SignInAndSignUpPage from "./pages/signInAndSignUp/SignInAndSignUp";
import { Unsubscribe } from "firebase";

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth: Unsubscribe | null = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    if (this.unsubscribeFromAuth !== null) {
      this.unsubscribeFromAuth();
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </ThemeProvider>
    );
  }
}

export default App;
