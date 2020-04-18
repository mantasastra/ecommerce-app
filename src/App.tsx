import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homePage/HomePage";

function HatsPage() {
  return (
    <div>
      <p>Hats Page</p>
    </div>
  );
}

const App: React.FunctionComponent<Object> = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
};

export default App;
