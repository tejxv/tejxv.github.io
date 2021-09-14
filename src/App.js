import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Redir from "./Redir"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/m" component={Redir} />
      </Switch>
    </Router>
  );
}

export default App;
