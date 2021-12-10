
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './componet/Navbar';
import { Home } from './componet/Home';
import { About } from './componet/About';
import LogIn from './componet/LogIn';
import SignUp from './componet/SignUp';
function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/About" >
            <About />
          </Route>
          <Route exact path="/Home">
            <Home />

          </Route>
          <Route exact path="/LogIn">
            <LogIn />
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </>

  );
}

export default App;
