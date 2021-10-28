import { Favourite, Home } from "./components";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/favourite">
          <Favourite />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
