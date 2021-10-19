// packages
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"; // https://reactrouter.com/web/guides/quick-start

// components
import ExternalNav from "components/ExternalNav";

import ProfilePage from 'pages/ProfilePage';
import LandingPage from 'pages/LandingPage';
import AboutPage from "pages/AboutPage";
import SchedulePage from "pages/SchedulePage";
// styles?
import { CssBaseline } from "@material-ui/core";


function App() {
    return (
        <CssBaseline style={{height: '100vh'}}>
          <Router>
                <ExternalNav />
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/profile" component={ProfilePage} />
                    <Route path="/schedule" component={SchedulePage} />
                    <Route path="*"><p>Sorry! Page not found</p></Route>
                </Switch>
          </Router>
        </CssBaseline>
    );
}

export default App;
