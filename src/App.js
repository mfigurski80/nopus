// packages
import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Link
} from "react-router-dom"; // https://reactrouter.com/web/guides/quick-start
// custom components
import LoginPage from 'pages/LoginPage';
// styles?
import './App.css';

function App() {
    return (
        <Router>
            <p>Hi, welcome</p>
            <Switch>
                <Route exact path="/">
                    <p>Welcome to the home root "/". Look at the address bar ^^ and add "/login" to go to the login page!</p>
                </Route>
                <Route path="/login" component={LoginPage} />
                <Route path="*"><p>Sorry! Page not found</p></Route>
            </Switch>
        </Router>
    );
}

export default App;
