import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login_Page/Login.jsx";
import SignUp from "./Login_Page/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signup" exact component={SignUp} />
          <Route exact path="/login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
