import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "emotion-theming";
import theme from "./Theme/theme";

import Header from "./components/header/Header";
import HomePage from "./pages/homePage/HomePage";
import ShopPage from "./pages/shop/Shop";
import SignInAndSignUpPage from "./pages/signInAndSignUp/SignInAndSignUp";

const App: React.FunctionComponent<Object> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
