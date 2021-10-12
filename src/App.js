// packages
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"; // https://reactrouter.com/web/guides/quick-start
// components
import ExternalNav from "components/ExternalNav";
import LoginPage from 'pages/LoginPage';
import LandingPage from 'pages/LandingPage';
// styles?



function App() {
    return (
        <Router>
            <ExternalNav />
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <Route path="/login" component={LoginPage} />
                <Route path="*"><p>Sorry! Page not found</p></Route>
            </Switch>
        </Router>
    );
}

export default App;
