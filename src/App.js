// packages
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"; // https://reactrouter.com/web/guides/quick-start
// NOTE: we're using v6.0, which is alpha and has breaking changes from ^^
// so also look at https://ui.dev/react-router-nested-routes/
import { useAuth0 } from '@auth0/auth0-react'

// components
import LoginHandler from 'pages/LoginHandler';
import RegistrationPage from 'pages/RegistrationPage';
import ProfilePage from 'pages/ProfilePage';
import LandingPage from 'pages/LandingPage';
import AboutPage from "pages/AboutPage";
import FeaturesPage from 'pages/FeaturesPage';
import SchedulePage from "pages/SchedulePage";
import NotFoundPage from "pages/NotFoundPage";
import InternalWrapper from "pages/InternalWrapper";
import ExternalWrapper from "pages/ExternalWrapper";
// styles?
import { CssBaseline } from "@material-ui/core";


function App() {
    const { isAuthenticated } = useAuth0();

    return (
        <CssBaseline style={{height: '100vh'}}>
            <Router>
                <Routes>
                    {/* Auth Landing Page */}
                    <Route path="/login" element={<LoginHandler redirectTo='/user/profile' />} /> 
                    <Route path="/register" element={<RegistrationPage />} />
                    {/* Internal Pages */}
                    <Route path="/user/*" element={<InternalWrapper />}>
                        { isAuthenticated && <>
                            <Route path="profile" element={<ProfilePage />} />
                            <Route path="schedule" element={<SchedulePage />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </> }
                        <Route path="*" element={<p>Log In to view this page!</p>} />
                    </Route>
                    {/* External Pages */}
                    <Route path="/*" element={<ExternalWrapper />}>
                        <Route exact path="" element={<LandingPage />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route path="features" element={<FeaturesPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </Router>
        </CssBaseline>
    );
}

export default App;
