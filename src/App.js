import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Redir from "./Redir"
import Home from "./Home"
import Resume from "./Resume"

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/m" component={Redir} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
    </Router>
  );
}

export default App;
