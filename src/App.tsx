import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "emotion-theming";
import { Unsubscribe } from "firebase";

import { auth, createUserProfileDoc } from "./firebase/firebase.utils";
import theme from "./Theme/theme";
import Header from "./components/header/Header";
import HomePage from "./pages/homePage/HomePage";
import ShopPage from "./pages/shop/Shop";
import SignInAndSignUpPage from "./pages/signInAndSignUp/SignInAndSignUp";

import "./App.css";

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth: Unsubscribe | null = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDoc(user);

        userRef?.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }

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
