import { routes } from "./utils/routes";
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
      <Router>
        <Navbar />
        <Switch>
          {
            routes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact} component={route.component} />
            ))
          }
        </Switch>
      </Router>
  );
}

export default App;
