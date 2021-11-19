import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Redir from "./Redir"
import Home from "./Home"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/m" component={Redir} />
        <Route exact path="/resume" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
