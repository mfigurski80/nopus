// packages
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"; // https://reactrouter.com/web/guides/quick-start

// components
import ExternalNav from "components/ExternalNav";
import LoginPage from 'pages/LoginPage';
import landingImage from './components/landingimage.png';
import AboutPage from "pages/AboutPage";
// styles?

const header = {
  position: 'absolute',
  left: 121,
  top: 350,
  width: 450,
  fontFamily: 'Gothic A1',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: 55,
  color: 222222,
};

const desc = {
  position: 'absolute',
  left: 121,
  top: 500,
  width: 350,
  fontFamily: 'Lato',
  fontStyle: 'normal',
  fontWeight: 300,
  fontSize: 16,
};

const backgroundImage = {
  width: 1000,
  height: 690,
  position: 'absolute',
  left: 440,
};

function App() {
    return (
        <Router>
            <ExternalNav />
            <Switch>
                <Route exact path="/">
                    <img src={landingImage} style={backgroundImage}/>
                    <h1 style={header}> Scheduling made easy.</h1>
                    <p style={desc}>Nopus is the solution to all of your add-
                    drop-swap problems. Tell us your major and graduation date,
                    and we’ll take care of the rest.</p>
                </Route>
                <Route path="/login" component={LoginPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="*"><p>Sorry! Page not found</p></Route>
            </Switch>
        </Router>
    );
}

export default App;
