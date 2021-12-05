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
import ScheduleCreationPage from 'pages/ScheduleCreationPage'
// styles?
import { CssBaseline } from "@material-ui/core";


function App() {
    const { isAuthenticated, user } = useAuth0();
    //const id = user.sub;
    //console.log(user.sub);
    //const obj = fetch(`https://auth0.com/api/v2/user/` + id).then(res => res.json());
    return (
        <CssBaseline>
            <Router>
                <Routes>
                    {/* Auth Landing Page */}
                    { (true === false)  ? (
                        <Route path="/login" element={<LoginHandler redirectTo='/user/profile' />} /> 
                    ) : (
                        <Route path="/login" element={<RegistrationPage />} />
                    )}
                    <Route path="/register" element={<RegistrationPage />} />
                    {/* Internal Pages */}
                    <Route path="/user/*" element={<InternalWrapper />}>
                        { isAuthenticated && <>
                            <Route path="profile" element={<ProfilePage />} />
                            <Route path="schedule" element={<SchedulePage />} />
                            <Route path="schedule/create" element={<ScheduleCreationPage />}/>
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
