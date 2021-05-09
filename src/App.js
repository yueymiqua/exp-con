import './App.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from './components/LandingPage';
import PricingPage from './components/PricingPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <LandingPage/>
          </Route>
          <Route path="/pricing" exact>
            <PricingPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

        // <nav>
        //   <ul>
        //     <li>
        //       <Link to="/">Home</Link>
        //     </li>
        //     <li>
        //       <Link to="/pricing">Pricing</Link>
        //     </li>
        //   </ul>
        // </nav>

export default App;
