import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/react">React</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/topics">
            {/* */}
          </Route>
          <Route path="/">
            {/* */}
          </Route>
        </Switch>
        <div id="sub-app"></div>
      </div>
    </Router>
  );
}

export default App;
